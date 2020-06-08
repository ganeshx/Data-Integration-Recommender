USE ROLE ACCOUNTADMIN;

WITH 
ROLE_GRANTS AS (
  SELECT
    PRIVILEGE,
    GRANTED_ON    AS GRANTED_ON_TYPE,
    TABLE_CATALOG AS GRANTED_ON_DATABASE,
    TABLE_SCHEMA  AS GRANTED_ON_SCHEMA,
    NAME          AS GRANTED_ON_NAME,
    GRANTED_TO    AS GRANTED_TO_TYPE,
    GRANTEE_NAME  AS GRANTED_TO_NAME
  FROM
    SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_ROLES
  WHERE
    DELETED_ON IS NULL
),

USER_GRANTS AS (
  SELECT
  'USAGE'      AS PRIVILEGE,
  'ROLE'       AS GRANTED_ON_TYPE,
  NULL         AS GRANTED_ON_DATABASE,
  NULL         AS GRANTED_ON_SCHEMA,
  ROLE         AS GRANTED_ON_NAME,
  GRANTED_TO   AS GRANTED_TO_TYPE,
  GRANTEE_NAME AS GRANTED_TO_NAME
  FROM
    SNOWFLAKE.ACCOUNT_USAGE.GRANTS_TO_USERS
  WHERE
    DELETED_ON IS NULL
),

GRANTS AS (
  SELECT * FROM ROLE_GRANTS 
  UNION ALL 
  SELECT * FROM USER_GRANTS
),

GRANTS_JSON AS (
  SELECT
    OBJECT_CONSTRUCT(*) AS GRANT_OBJ
  FROM
    GRANTS
),

GRANTS_JSON_ARR AS (
  SELECT
    ARRAY_AGG(*) AS GRANTS
  FROM
    GRANTS_JSON
)

SELECT * FROM GRANTS_JSON_ARR;