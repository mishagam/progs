/// Unit Tests for topra_conf class
/// developed M.Gambarian May 2011
#include "CppUnitLite/TestHarness.h"
#include "CppUnitLite/Test.h"
#include <string>

#include "strtool.H"
#include "xception.H"
#include "topra_io.h"

#include "topra_utils.h"

struct tTopra_State topra_state;

static SimpleString StringFrom(const std::string& value)
{
    return SimpleString(value.c_str());
}

const char *date1300 = "2011.03.13_10:06:40";
const char *date1315 = "2011.09.03_01:46:40";
TEST( test_time, sec_to_str )
{
  int tim = 1300000000;
  clStr sTime;
  IntToStrTime(sTime, tim);
  printf("TEST test_time, sec_to_str time %d -> %s\n", tim, sTime.c_str());
  CHECK(strcmp(date1300, sTime.c_str())==0);
}

TEST( test_time, sec_to_str1 )
{
  int tim = 1315000000;
  clStr sTime;
  IntToStrTime(sTime, tim);
  printf("TEST test_time, sec_to_str1 time %d -> %s\n", tim, sTime.c_str());
  CHECK(strcmp(date1315, sTime.c_str())==0);
}

TEST( test_time, str_to_sec )
{
  const char * s = date1300;
  int t = StrToIntTime(s);
  printf("TEST test_time, str_to_sec time %s -> %d \n", s, t);
  LONGS_EQUAL(1300000000, t);
}

TEST( test_time, str_to_sec1 )
{
   const char * s = date1315;
   int t = StrToIntTime(s);
   printf("TEST test_time, str_to_sec1 time %s -> %d \n", s, t);
   LONGS_EQUAL(1315000000, t);
}

TEST( test_time, int_str_int )
{
    clStr sTime;
    int t0 = 1300000000;
    IntToStrTime(sTime, t0);
    int t1 = StrToIntTime(sTime.c_str());
    printf("TEST test_time, int_str_int t0, t1 = %d %d\n", t0, t1);
    LONGS_EQUAL(t0, t1);
}
