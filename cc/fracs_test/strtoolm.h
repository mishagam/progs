/**
 * \file strtoolm.h
 * \brief ������� �������� ��� ������ �� �������� �� ��� STL string
 *
 *  ������������:
 *          �������� �.�., M.Gambarian
 */

#ifndef mSTRTOOL_H
#define mSTRTOOL_H

#include <stdarg.h>
// #include <string>

#include "newtypes.h"

/**
 * remained from Artem - I probably wouldn't define this.
 */
typedef char * pchar;

/**
 * mask character which is replaced
 */
extern const char cMaskChar;

/**
 * ���������� ������, ���� ������ - ����������
 */
extern C_FUN bool isBlank( char C );

/**
 * ���������� ������, ���� ������ �� �������� ������������ ��������
 */
extern C_FUN bool isBlankStr( const char * p );

/**
 * ������� ���������� ������� � ������ � ����� ������
 */
extern C_FUN char * strEatBlanks( char * S );

/** ������� ���������� ������� � ����� ������
 *
 */
extern C_FUN char * strEatBlankTail( char * S, int Len = 0 );

/** ������� ���������� ������� � ������ ������
 */
extern C_FUN char * strEatBlankHead( char * S );

/**  ���� ������ ���������� ������ � ������
 *
 */
extern C_FUN char * strFindSpace( char * S );

/**  ���� ������ ���������� ������ � ������, ��� �������
 *
 */
extern C_FUN char * strFindNoQSpace( char * S );

extern C_FUN char * strChangeChar( char * S, char c1, char c2 );
extern C_FUN char * newString( const char * Str );
extern C_FUN char * StrCopy( char * Dest, const char * Src, int MaxLength );
extern C_FUN char * StrCopyFor( char * Dest, const char * Src, int MaxLength );
extern C_FUN void StrClear( char * S );
extern void StrClear( char * S, unsigned int Size );

/**
 * ���� ������ � ������� �����
 * ���������� ����� ��� -1, ���� ������ �� �������
 */
extern C_FUN int StringInArray(
  const char * Array,   ///< ������
  const char * Str,     ///< ������� ������
  int StrLen,           ///< ����� ������ � �������
  int StrCount       ///< ���������� ����� � �������
);

/** �������� ������ � �������� ��������
 *
 */
extern C_FUN char * StrUpperCase( char * D, const char * S );

// �������� ������ � ������� ��������
extern C_FUN char * StrLowerCase( char * D, const char * S );

// ������ ������� ������ �� ����� �� ��������
extern C_FUN char * StrChangeByMask( char * Str, const char * Mask, char C );

// ��������� ����� �������� ������
extern C_FUN UInt32 CSum( const char * S );

// �������� ����� ������ �� ��������� p_begin �� ��������� p_end
extern C_FUN char *StrCopyBetweenSymbols(
  char * Str,
  const char * p_begin,
  const char * p_end );


/**
 * ��������� � ������ ������ �� �������
 */
template <class T>
  STATIC_TPL_FUN char * StrCatF( char * Str, const char * Format, T Value )
{
  int Offset = strlen( Str );
  sprintf( Str + Offset, Format, Value );
  return( Str );
}

/**
 * maximum length of clmStr string
 */
#define MAXSTRLEN   512

/**
 * \brief our string library.
 *
 * Used local version instead of common clmStr to escape use of STL string.
 * STL string didn't work for me with intel compiler.
 */
class clmStr
{
    char *buf; ///< ��������� �� ������ �� ��������� clmStr.
    private:
    /**
     * ���������� ������ �� ������� � ������ ��������.
     */
    void RewriteInternal( const char * FormatStr, va_list L )
    {
      char * str = new char[ MAXSTRLEN ];
      memset( str, 0, MAXSTRLEN );
      clear();
      
      int Res = vsnprintf( str, MAXSTRLEN, FormatStr, L );
      
      if( Res > 0 )
      {
        if( Res > MAXSTRLEN )   // ���� �� �����������...
        {
          printf("**** clmStr.RewriteInternal() operation failed\n");
          // return;
        } else {
            assign( str );
        }
      }
      delete str;
    }
    /**
     * set string value to new string.
     */
    void assign(const char *s) {
        //printf("clmStr(). assign string %s\n", s);
        strncpy(buf, s, MAXSTRLEN-2);
        buf[ MAXSTRLEN-2] = 0;
    }
    /**
     * ���������, ������ �� ������
     */
    int empty() { return buf[0]==0; }
    /**
     * �������� ������
     */
    void clear() { buf[0] = 0; }
  public:
    /**
     * �������� ������
     */
    void Clear( void ){ clear(); }

    /**
     * �������� �������� ������ �� ����� ������
     * \param S - ����� �������� ������.
     */
    void Set( const char * S ){ assign( S ); }

    /**
     * ���������� ������ �� ������� � ������ ��������
     */
    void Rewrite( const char * FormatStr, ... )
    {
      va_list L;
      va_start( L, FormatStr );
      RewriteInternal( FormatStr, L );
      va_end( L );
    }
    /**
     * ������� �������� ��� const � ������.
     */
    const char * c_str() const { return buf; }

    /**
     * ����������� ������ ������.
     */
    clmStr( void ){
        //printf("clmStr() constructor called\n");
        buf = new char[MAXSTRLEN];
        buf[0] = 0;
    }
    /**
     * ���� ����������� �������� ������ ������ b
     */
    clmStr(const clmStr &b) {
        buf = new char[MAXSTRLEN];
        assign(b.c_str());
    }
    /**
     * ����������� ������ ���������� ������.
     */
    virtual ~clmStr() {
        //printf("~clmStr called\n");
        delete []buf;
    }

    /**
     * ����������� � ��������������� ������ ��� � printf
     */
    clmStr( const char * FormatStr, ... )
    {
      //printf("~clmStr(Format ...) called\n");
      buf = new char[ MAXSTRLEN ];
      va_list L;
      va_start( L, FormatStr );
      RewriteInternal( FormatStr, L );
      va_end( L );
    }

    /**
     * ������� ��������� �� ������ ��� �� ������ ������
     */
    operator const char *(){ return( empty()? "": buf ); }
    /**
     * �������� = � ������������ �������.
     */
    clmStr& operator=(clmStr& rhs) {
        this->assign( rhs.c_str() );
        return *this;
    }
    /**
     * �������� = ������������� �������� ������.
     */
    clmStr& operator=(const char *s) {
        this->assign( s );
        return *this;
    }

    int Empty() { return empty(); }
};

/**
 * string splitter library developed by artem.
 * I used it rarely and don't really remember.
 * ����������� - TAB, LF, CR, space
 */
class clmStrSpaceSplitter
{
  protected:
    char * Str;  ///< �������� ������ ����������� �� ����� ���������� � S
    int mCount;  ///< ���������� ������
    pchar * S;   ///< ������ �������� �� ������� �� ������� Str
    
    void CountSubstrings( void );
    /**
     * ����������� ������.
     */
    void Destroy( void )
    {
      mCount = 0;
      DELETE( Str );
      DELETE( S );
    }
    
  public:
    /**
     * �����������. ��������������� ��� ������ ���������.
     */
    clmStrSpaceSplitter( void ): Str( 0 ), S( 0 ){}
    /**
     * ����������. ����������� ������.
     */
    ~clmStrSpaceSplitter( void ){ Destroy(); }
    /**
     * ��������� ������ �� ��������� ������ �� ��������.
     */
    void Split( const char * FullStr );
    /**
     * ���������� ���������� ������ � ���������.
     */
    int Count( void ){ return( mCount ); }
    /**
     * ���������� i-� ����� �� ���������.
     */
    const char * operator[]( int i ){ return( mCount? S[ i ]: 0 ); }
};

#endif
