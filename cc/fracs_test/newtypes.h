/*	������������� ������� ����
 *
 *	������������:
 *			�������� �.�.
 *			�������� �.�.
 * -------------------------------------------------------------------- */

#ifndef mNEWTYPES_H
#define mNEWTYPES_H

#include <sys/types.h>
#include <sys/time.h>

#ifdef OS_SOLARIS
#include <ieeefp.h>
#else
#include <math.h>
#endif


#include "macros.h"


#ifdef BUILD_SKIF
#include "SrvTools.h"
#endif


#ifndef __cplusplus
typedef Int32 bool;
#endif


/* �������������������� ���� ������������� ������� */
#ifdef OS_SOLARIS

typedef uint8_t		UInt8;
typedef int8_t		Int8;
typedef uint16_t	UInt16;
typedef int16_t		Int16;
typedef uint32_t	UInt32;
typedef int32_t		Int32;

#ifdef __LP64__
typedef uint64_t	UInt64;
typedef int64_t		Int64;
#endif

#elif defined OS_WINDOWS

typedef unsigned char	UInt8;
typedef signed char	Int8;
typedef unsigned short int	UInt16;
typedef signed short int	Int16;
typedef unsigned long int	UInt32;
typedef signed long int	Int32;

#else

typedef __uint8_t	UInt8;
typedef __int8_t	Int8;
typedef __uint16_t	UInt16;
typedef __int16_t	Int16;
typedef __uint32_t	UInt32;
typedef __int32_t	Int32;

#ifdef __LP64__
typedef __uint64_t	UInt64;
typedef __int64_t	Int64;
#endif

#endif


typedef UInt8  *	pUInt8;
typedef Int8   *	pInt8;
typedef UInt16 *	pUInt16;
typedef Int16  *	pInt16;
typedef UInt32 *	pUInt32;
typedef Int32  *	pInt32;

#ifdef __LP64__
typedef UInt64 *	pUInt64;
typedef Int64  *	pInt64;
#endif


/* ���������� ������������ ��� */
#define t_Real		double



#define ValByPtr( Type, Ptr )	*( ( Type * )( Ptr ) )

#define UInt8Val( Ptr )		ValByPtr( UInt8, Ptr )
#define Int8Val( Ptr )		ValByPtr( Int8, Ptr )
#define UInt16Val( Ptr )	ValByPtr( UInt16, Ptr )
#define Int16Val( Ptr )		ValByPtr( Int16, Ptr )
#define UInt32Val( Ptr )	ValByPtr( UInt32, Ptr )
#define Int32Val( Ptr )		ValByPtr( Int32, Ptr )
#define DoubleVal( Ptr )	ValByPtr( double, Ptr )


// "��������" ��������
typedef enum
{
  rvqCorrect,		// ���������� ��������
  rvqIncorrect,		// ������������ ��������
  rvqOutOfRange,	// ����������, �� ��������� �� ������� ��������
  
  RVAL_QUALITY_COUNT
} tRValQuality;


// Real Value - �������� + �������������.
struct rval
{
  float x;	// ��������
  Int32 dx;	// �������������: 1 - �������� ����������, 0 - ������������

#if( !defined( PREPR ) && defined( __cplusplus ) )
  // �������� �������� �� �������������.
  bool Reliable( void ) const { return( dx == 1 ); }

  // �������� �������� �� ���������������.
  bool NonReliable( void ) const { return( dx != 1 ); }

  // ��������� �������� �� ��������������
  bool IsValueIncorrect( void ) const
  {
#ifdef OS_WINDOWS
    return( false );
#else
    return( finite( x )? false: true );
#endif
  }

  // ���������� "��������" ��������.
  tRValQuality Evaluate( float VMin, float VMax ) const
  {
    tRValQuality Result = rvqCorrect;

    if( IsValueIncorrect() ) Result = rvqIncorrect;
    else if( OUTSIDE( x, VMin, VMax ) ) Result = rvqOutOfRange;

    return( Result );
  }
  
  void Blank( void ){ x = 0.0; dx = 0; }

  // ������������ �������� � �������������, ���� �������� �����������.
  void Correct( void )
  {
    if( IsValueIncorrect() ) Blank();
    else if( NonReliable() ) dx = 0;
  }

  // ������������ �������� � �������������, ���� �������� �����������.
  // ��������� �������� �� �������������� ��������� ��������� � ��� ������ ��� �� �������
  // ������ �������������.
  void Correct( float VMin, float VMax )
  {
    Correct();
    if( Reliable() && OUTSIDE( x, VMin, VMax ) ) dx = 0;
  }

  // ������������� �������� � ������������� (� ����������).
  void Set( float X, Int32 DX = 1 )
  {
    x = X;
    dx = DX;
    Correct();
  }

  // ������������� �������� � ������������� (� ����������).
  void Set( const rval & a ){ Set( a.x, a.dx ); }

  // ��������� �������� � ������������� �� ������ (� ����������).
  void Set( const char * Str, const char * Fmt = 0 )
  {
    if( sscanf( Str, Fmt? Fmt: "%f %d", &x, &dx ) != 2 ) Blank();
    else Correct();
  }

  rval( void ){ Blank(); }

  rval( float X ){ Set( X, 1 ); }

  rval( float X, int DX ){ Set( X, DX ); }

  ~rval( void ){}
  
  
  const rval& operator =( float a ){ Set( a, 1 ); return( *this ); }
  const rval& operator =( const rval & a ){ Set( a.x, a.dx ); return( *this ); }
  const rval& operator =( const char * Str ){ Set( Str ); return( *this ); }


  rval operator +( const rval& a ) const
  {
    rval res;
    if( a.Reliable() && Reliable() ) res.Set( x + a.x , 1 );
    return( res );
  }

  void operator +=( const rval& a )
  {
    if( a.Reliable() && Reliable() ) x += a.x;
    else Blank();
  }

  rval operator -( const rval& a ) const
  {
    rval res;
    if( a.Reliable() && Reliable() ) res.Set( x - a.x , 1 );
    return( res );
  }

  void operator -=( const rval& a )
  {
    if( a.Reliable() && Reliable() ) x -= a.x;
    else Blank();
  }

  rval operator *( const rval& a ) const
  {
    rval res;
    if( a.Reliable() && Reliable() ) res.Set( x * a.x , 1 );
    return( res );
  }

  void operator *=( const rval& a )
  {
    if( a.Reliable() && Reliable() ) x *= a.x;
    else Blank();
  }
/* 
  rval operator *( float a ) const
  {
    rval res;
    if( Reliable() ) res.Set( x * a , 1 );
    return( res );
  }

  void operator *=( float a )
  {
    if( Reliable() ) x *= a;
    else Blank();
  }
 */
  rval operator /( const rval& a ) const
  {
    rval res;
    if( a.Reliable() && Reliable() ) res.Set( x / a.x , 1 );
    return( res );
  }

  void operator /=( const rval& a )
  {
    if( Reliable() ) x /= a.x;
    else Blank();
  }
/* 
  rval operator /( float a ) const
  {
    rval res;
    if( Reliable() ) res.Set( x / a , 1 );
    return( res );
  }

  void operator /=( float a )
  {
    if( Reliable() ) x /= a;
    else Blank();
  }
 */

  // ��� ����������� ���������, ��� �������������
//  bool operator >( float a ) const { return( Reliable() && ( x > a ) ); }
  bool operator >( const rval &a ) const
    { return( Reliable() && a.Reliable() && ( x > a.x ) ); }

//  bool operator <( float a ) const { return( Reliable() && ( x < a ) ); }
  bool operator <( const rval &a ) const
    { return( Reliable() && a.Reliable() && ( x < a.x ) ); }

//  bool operator >=( float a ) const { return( Reliable() && ( x >= a ) ); }
  bool operator >=( const rval &a ) const
    { return( Reliable() && a.Reliable() && ( x >= a.x ) ); }

//  bool operator <=( float a ) const { return( Reliable() && ( x <= a ) ); }
  bool operator <=( const rval &a ) const
    { return( Reliable() && a.Reliable() && ( x <= a.x ) ); }

//  bool operator ==( float a ) const { return( FLT_EQ( x, a ) && Reliable() ); }
  bool operator ==( const rval &a ) const
    { return( Reliable() && a.Reliable() && FLT_EQ( x, a.x ) ); }

//  bool operator !=( float a ) const
//    { return( NonReliable() || FLT_NEQ( x, a ) ); }
  bool operator !=( const rval &a ) const
    { return( NonReliable() || a.NonReliable() || FLT_NEQ( x, a.x ) ); }
#endif
};


// Integer Value - �������� + �������������.
struct ival	
{
  Int32 x;	// ��������
  Int32 dx;	// �������������: 1 - �������� ����������, 0 - ������������

#if( !defined( PREPR ) && defined( __cplusplus ) )
  // �������� �������� �� �������������
  bool Reliable( void ) const { return( dx == 1 ); }

  // �������� �������� �� ���������������
  bool NonReliable( void ) const { return( dx != 1 ); }

  // ��������� �������� �������������
  void Correct( void ){ if( NonReliable() ) dx = 0; }

  // ������������ �������� � �������������, ���� �������� �����������.
  // ��������� �������� �� �������������� ��������� ��������� � ��� ������ ��� �� �������
  // ������ �������������.
  void Correct( Int32 VMin, Int32 VMax )
  {
    Correct();
    if( Reliable() && OUTSIDE( x, VMin, VMax ) ) dx = 0;
  }

  // ��������� �������� � ������������� (� ���������� ���������)
  void Set( Int32 X, Int32 DX ){ x = X; dx = DX; Correct(); }

  ival( void ){ Set( 0, 0 ); }
  ival( Int32 X, int DX = 1 ){ Set( X, DX ); }
  ~ival( void ){}
  
  
  ival operator +( const ival& a ) const
  {
    ival res;
    res = ( a.Reliable() && Reliable() )? ival( x + a.x , 1 ): ival( 0, 0 );
    return( res );
  }

  ival operator -( const ival& a ) const
  {
    ival res;
    res = ( a.Reliable() && Reliable() )? ival( x - a.x , 1 ): ival( 0, 0 );
    return( res );
  }

  ival operator *( const ival& a ) const
  {
    ival res;
    if( a.Reliable() && Reliable() ) res.Set( x * a.x , 1 );
    return( res );
  }

  ival operator *( Int32 a ) const
  {
    ival res;
    if( Reliable() ) res.Set( x * a , 1 );
    return( res );
  }

  void operator *=( Int32 a ){ x *= a; }

  ival operator /( const ival& a ) const
  {
    ival res;
    if( a.Reliable() && Reliable() ) res.Set( x / a.x , 1 );
    return( res );
  }

  ival operator /( Int32 a ) const
  {
    ival res;
    if( Reliable() ) res.Set( x / a , 1 );
    return( res );
  }

  void operator /=( Int32 a ){ x *= a; }

  bool operator >( Int32 a ) const { return( Reliable() && ( x > a ) ); }
  bool operator >( const ival &a ) const
    { return( Reliable() && a.Reliable() && ( x > a.x ) ); }

  bool operator <( Int32 a ) const { return( Reliable() && ( x < a ) ); }
  bool operator <( const ival &a ) const
    { return( Reliable() && a.Reliable() && ( x < a.x ) ); }

  bool operator >=( Int32 a ) const { return( Reliable() && ( x >= a ) ); }
  bool operator >=( const ival &a ) const
    { return( Reliable() && a.Reliable() && ( x >= a.x ) ); }

  bool operator <=( Int32 a ) const { return( Reliable() && ( x <= a ) ); }
  bool operator <=( const ival &a ) const
    { return( Reliable() && a.Reliable() && ( x <= a.x ) ); }

  bool operator ==( Int32 a ) const { return( ( x == a ) && Reliable() ); }
  bool operator ==( const ival &a ) const
    { return( Reliable() && a.Reliable() && ( x == a.x ) ); }

  bool operator !=( Int32 a ) const
    { return( NonReliable() || ( x != a ) ); }
  bool operator !=( const ival &a ) const
    { return( NonReliable() || a.NonReliable() || ( x != a.x ) ); }
#endif
};


#ifndef BUILD_SKIF
enum tStatusValue
{
  STATUS_NORMAL,
  STATUS_NRG,
  STATUS_VRG,
  STATUS_NAG,
  STATUS_VAG,
  STATUS_NVG,
  STATUS_VVG,
  STATUS_UNDEF,
  STATUS_EMPTY
};
#endif


// Real Value = �������� + ������.
struct srval
{
  float x;	// ��������
  Int32 st;	// ������ (tStatusValue)

#if( !defined( PREPR ) && defined( __cplusplus ) )
  // �������� �������� �� �������������
  bool Reliable( void ) const
    { return( BETWEENe( st, STATUS_NORMAL, STATUS_VVG ) ); }

  // �������� �������� �� ���������������
  bool NonReliable( void ) const
    { return( OUTSIDE( st, STATUS_NORMAL, STATUS_VVG ) ); }

  // ��������� �������� �� ��������������
  bool IsValueIncorrect( void ) const
  {
#ifdef OS_WINDOWS
    return( false );
#else
    return( finite( x )? false: true );
#endif
  }

  // ������������ �������� � �������������, ���� �������� �����������.

  void Blank( void ){ x = 0.0; st = STATUS_UNDEF; }

  void Correct( void )
  {
    if( IsValueIncorrect() ) Blank();
    else if( NonReliable() ) st = STATUS_UNDEF;
  }

  // ������������� �������� � ������������� (� ����������).
  void Set( float X, Int32 ST = STATUS_NORMAL )
  {
    x = X;
    st = ST;
    Correct();
  }

  const srval& operator =( float a ){ Set( a ); return( *this ); }
  const srval& operator =( const rval & a )
  {
    Set( a.x, a.Reliable()? STATUS_NORMAL: STATUS_UNDEF );
    return( *this );
  }

  srval operator *( float a ) const
  {
    srval res;
    if( Reliable() ) res.Set( x * a, st );
    else res.Set( 0.0, STATUS_UNDEF );
    return( res );
  }

  srval operator /( float a ) const
  {
    srval res;
    if( Reliable() ) res.Set( x / a, st );
    else res.Set( 0.0, STATUS_UNDEF );
    return( res );
  }
#endif
};


// Real Value = �������� + ������.
struct sival
{
  Int32 x;	// ��������
  Int32 st;	// ������ (tStatusValue)

  // ������������� �������� � ������������� (� ����������).
  void Set( Int32 X, Int32 ST = STATUS_NORMAL ){ x = X; st = ST; }

  const sival& operator =( Int32 a ){ Set( a ); return( *this ); }
  const sival& operator =( const ival & a )
  {
    Set( a.x, a.Reliable()? STATUS_NORMAL: STATUS_UNDEF );
    return( *this );
  }

};


#pragma pack(1)

struct timevalue
{
  Int32 tv_sec;
  Int32 tv_usec;

#if( !defined( PREPR ) && defined( __cplusplus ) )
  void Set( const timeval * tv )
  {
    tv_sec = Int32( tv->tv_sec );
    tv_usec = Int32( tv->tv_usec );
  }
#endif
};
#pragma pack()


#ifdef __cplusplus
extern void CorrectArray( rval * Value, int Size );
#endif


/* ���������� true, ���� ��� �������� ������� ���������� */
extern bool IsArrayReliable( const rval * A, int Size );

/* ���������� true, ���� MustBeRel*100 � ����� %  
  ��������� ������� ���������� */
extern bool IsArrayReliable( const rval * A, int Size, float MustBeRel );

// ���������� true, ���� ��� �������� ������� ���������, ���������� �
// ����������� ��������� ���������.
extern bool IsArrayGood( const rval * A, int Size, float VMin, float VMax );

/* ���������� true, ���� ��� �������� ������� �� nan � �� inf */
extern bool IsArrayCorrect( const double * A, int Size );
extern bool IsArrayCorrect( const float * A, int Size );

/* ���������� true, ���� �������� - nan ��� inf */
extern bool IsIncorrect( double A );

/* ���������� ����� ������������� ��������� ������� */
extern int CountNonReliableValues( const rval * A, int Size );

#endif
