/// Unit Tests for topra_conf class
/// developed M.Gambarian May 2011
#include "CppUnitLite/TestHarness.h"
#include "CppUnitLite/Test.h"
#include <string>
#include "topra_conf.h"

SimpleString StringFrom(const std::string& value)
{
    return SimpleString(value.c_str());
}

TEST( clTopraConf, int_parm )
{
  clTopraConf tc("test.ini");
  int pa;
  tc.ReadValue("test", "a", "%d", &pa);
  printf("TEST clTopraConf, int_parm s: pa = %d\n", pa);
  LONGS_EQUAL(13, pa);
}

TEST( clTopraConf, int_parm_b )
{
  clTopraConf tc("test.ini");
  int pb;
  tc.ReadValue("test", "b", "%d", &pb);
  printf("TEST clTopraConf, int_parm_b pb = %d\n", pb);
  LONGS_EQUAL(100, pb);
}

TEST( clTopraConf, float_parm )
{
  clTopraConf tc("test.ini");
  float d;
  tc.ReadValue("test", "d", "%f", &d);
  printf("TEST clTopraConf, float_parm d = %f\n", d);
  DOUBLES_EQUAL(22.3333, d, 0.001);
}

TEST( clTopraConf, double_parm )
{
  clTopraConf tc("test.ini");
  double d;
  tc.ReadValue("test", "d", "%lf", &d);
  printf("TEST clTopraConf, double_parm d = %lf\n", d);
  DOUBLES_EQUAL(22.3333, d, 0.001);
}

TEST( clTopraConf, string_parm )
{
  clTopraConf tc("test.ini");
  const char *exp = "abcd";
  char s[100];
  tc.ReadString("test", "s", s);
  printf("TEST string_parm s: |%s|\n", s);
  CHECK(strcmp(exp, s)==0);
}

TEST( clTopraConf, string_env_simple)
{
  clTopraConf tc("test.ini");
  const char *exp = "abcd";
  char s[255];
  tc.ReadStringEnv("test", "s", s);
  printf("TEST string_env_simple  s: |%s|\n", s);
  CHECK(strcmp(exp, s)==0);
}

TEST( clTopraConf, string_env)
{
  clTopraConf tc("test.ini");
  char s[255];
  tc.ReadStringEnv("test", "seq", s);
  printf("TEST string_env s: |%s|\n", s);
  CHECK(strcmp("/home/mikhail/topra/test_runner/source1.txt", s)==0);
}

TEST( clTopraConf, string_env_root)
{
  clTopraConf tc("test.ini");
  char s[255];
  tc.ReadStringEnv("test", "root", s);
  printf("TEST string_env_root s: |%s|\n", s);
  CHECK(strcmp("/home/mikhail/topra", s)==0);
}

TEST( clTopraConf, string_env_mid)
{
  clTopraConf tc("test.ini");
  char s[255];
  tc.ReadStringEnv("test", "mid", s);
  printf("TEST string_env_mid s: |%s|\n", s);
  CHECK(strcmp("/home/home/mikhail/topra/end", s)==0);
}
