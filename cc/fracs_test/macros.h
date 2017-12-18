/*	Универсальные макросы
 *
 *	Разработчики:
 *			Алексеев А.Н.
 * -------------------------------------------------------------------- */

#ifndef mMACROS_H
#define mMACROS_H

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <limits.h>


#ifdef OS_WINDOWS
#define NAME_MAX	256
#define PATH_MAX	512
#define PATH_DELIMETER	'\\'
#endif


#if( defined( OS_SOLARIS ) && !defined( __GNUC__ ) )

#define PATH_DELIMETER	'/'
#define MAX_FILE_NAME_LENGTH	FILENAME_MAX
#define MAX_PATH_LENGTH		FILENAME_MAX
#define STATIC_TPL_FUN

#else

#define PATH_DELIMETER	'/'
#define MAX_FILE_NAME_LENGTH	PATH_MAX
#define MAX_PATH_LENGTH		PATH_MAX
#define STATIC_TPL_FUN		static

#endif



#define MAX_FILE_STR_LENGTH	1024

#define SHORT_STR_LENGTH	255

#define MAX_USER_NAME_LENGTH	40

#define GOUP( Var, Start, Edge )	for( Var = Start; Var < ( Edge ); Var++ )
#define GOUPTO( Var, Start, Edge )	for( Var = Start; Var <= ( Edge ); Var++ )
#define GODOWN( Var, Start, Edge )	for( Var = Start; Var > ( Edge ); Var-- )
#define GODOWNTO( Var, Start, Edge )	for( Var = Start; Var >= ( Edge ); Var-- )

#define BETWEENe( Val, Edge1, Edge2 )	( ( Val >= ( Edge1 ) ) && ( Val <= ( Edge2 ) ) )
#define BETWEEN( Val, Edge1, Edge2 )	( ( Val > ( Edge1 ) ) && ( Val < ( Edge2 ) ) )
#define OUTSIDE( Val, Edge1, Edge2 )	( ( Val < ( Edge1 ) ) || ( Val > ( Edge2 ) ) )

#define APPLY_RANGE( Val, Edge1, Edge2 )	\
{						\
  if( Val < ( Edge1 ) ) Val = ( Edge1 ); 	\
  else if( Val > ( Edge2 ) ) Val = ( Edge2 ); 	\
}


#define ENDLESS		while( 1 )

#define MALLOC( Type )		( Type * )malloc( sizeof( Type ) )
#define CALLOC( Count, Type )	( Type * )calloc( Count, sizeof( Type ) )


#define ZERO( Action, Ptr )	{ if( Ptr ) { Action( Ptr ); Ptr = 0; } }
#define FREE( Ptr )		ZERO( free, Ptr )
#define FCLOSE( Ptr )		ZERO( fclose, Ptr )
#define DELETE( Ptr )		ZERO( delete, Ptr )
#define DELETE_ARRAY( Ptr )	ZERO( delete[], Ptr )

#ifndef MAX
#define MAX( A, B )	( ( ( A ) >= ( B ) )? ( A ): ( B ) )
#endif

#ifndef MIN
#define MIN( A, B )	( ( ( A ) <= ( B ) )? ( A ): ( B ) )
#endif

#define ITEM_i( Array, i )		*( Array + i )
#define ITEM_ij( Array, JMAX, i, j )	*( Array + ( i ) * JMAX + j )
#define pITEM_i( Array, i )		( Array + i )
#define pITEM_ij( Array, JMAX, i, j )	( Array + ( i ) * JMAX + j )


#define EXCHANGE( Type, A, B )	{ Type Box; Box = A; A = B; B = Box; }


#define JOIN( A, B )		A##B


#ifndef C_FUN

#ifdef __cplusplus
#define C_FUN	"C"
#else
#define C_FUN
#endif

#endif


#define FAKE_USE( Par )		{ if( Par ){} }


//  Проверка вещественных величин на (не)равенство
// ---------------------------------------------------------

// Значение, которое можно считать нулевым
#define FLT_ZERO_VALUE		1.0e-12f
#define DBL_ZERO_VALUE		1.0e-16

// Значение, которое можно грубо считать нулевым
#define FLT_GROSS_ZERO_VALUE	9.0e-7f
#define DBL_GROSS_ZERO_VALUE	9.0e-15


// Проверка величин на равенство
#define FLT_EQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) <= FLT_ZERO_VALUE )
#define DBL_EQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) <= DBL_ZERO_VALUE )

// Грубая проверка величин на равенство
#define FLT_GROSS_EQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) <= FLT_GROSS_ZERO_VALUE )
#define DBL_GROSS_EQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) <= DBL_GROSS_ZERO_VALUE )


// Проверка величин на неравенство
#define FLT_NEQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) > FLT_ZERO_VALUE )
#define DBL_NEQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) > DBL_ZERO_VALUE )

// Грубая проверка величин на неравенство
#define FLT_GROSS_NEQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) > FLT_GROSS_ZERO_VALUE )
#define DBL_GROSS_NEQ( v1, v2 )	( fabs( ( v1 ) - ( v2 ) ) > DBL_GROSS_ZERO_VALUE )


// Проверка величин на равенство нулю
#define FLT_ZERO( v )		( fabs( v ) <= FLT_ZERO_VALUE )
#define DBL_ZERO( v )		( fabs( v ) <= DBL_ZERO_VALUE )

// Грубая проверка величин на равенство нулю
#define FLT_GROSS_ZERO( v )	( fabs( v ) <= FLT_GROSS_ZERO_VALUE )
#define DBL_GROSS_ZERO( v )	( fabs( v ) <= DBL_GROSS_ZERO_VALUE )


// Проверка величин на неравенство нулю
#define FLT_NONZERO( v )	( fabs( v ) > FLT_ZERO_VALUE )
#define DBL_NONZERO( v )	( fabs( v ) > DBL_ZERO_VALUE )

// Грубая проверка величин на неравенство нулю
#define FLT_GROSS_NONZERO( v )	( fabs( v ) > FLT_GROSS_ZERO_VALUE )
#define DBL_GROSS_NONZERO( v )	( fabs( v ) > DBL_GROSS_ZERO_VALUE )


#define COPY_ARRAY( To, From )	memcpy( To, From, sizeof( From ) )


// Перенос данных из массива (одномерного) в массив с масштабированием.
#define PUT_ARRAY( Dest, Src, Size, Mul )	\
{ for( int i = 0; i < Size; i++ ) Dest[ i ] = Src[ i ] * Mul; }

// Перенос данных из массива (двумерного) в массив с масштабированием.
#define PUT_ARRAY2( Dest, Src, Size1, Size2, Mul )	\
{ for( int i = 0; i < Size1; i++ ) for( int j = 0; j < Size2; j++ ) Dest[ i ][ j ] = Src[ i ][ j ] * Mul; }


#define FILL_ARRAY( Ar, Size, Value )	\
{ for( int i = 0; i < Size; i++ ) Ar[ i ] = Value; }

#define FILL_ARRAY2( Ar, Size1, Size2, Value )	\
{ for( int i = 0; i < Size1; i++ ) for( int j = 0; j < Size2; j++ ) Ar[ i ][ j ] = Value; }

#define PRINT_ARRAY( Ar, Size, Format )	\
{ for( int i = 0; i < Size; i++ ) printf( Format, i, Ar[ i ] ); }

#define PRINT_TMP_ARRAY( Ar, Size, Format )	\
{ for( int i = 0; i < Size; i++ ) printf( Format, i, Ar[ i ].x, Ar[ i ].dx ); }

#define CLEAR( Var )		{ memset( &Var, 0, sizeof( Var ) ); }
#define CLEAR_ARRAY( Ar )	{ memset( Ar, 0, sizeof( Ar ) ); }
#define CLEAR_MEMORY( Ar, T, S )	{ memset( Ar, 0, sizeof( T ) * S ); }

#define sign( Val ) 	( ( Val > 0 )? 1: ( Val < 0? -1: 0 ) )


#define SAFE_INC( Val, MaxVal )	{ if( Val < MaxVal ) Val++; }

// Преобразование сквозного индекса в номера кассеты и призмы
// (для массивов, индексируемых с 0, но заполняемых с 1).
#define DIRECT_INDEX_TO_NTVS( N )	( N % NTVS_m )
#define DIRECT_INDEX_TO_NPRI( N )	( N / NTVS_m )

#endif
