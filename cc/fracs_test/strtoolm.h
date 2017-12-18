/**
 * \file strtoolm.h
 * \brief Базовые средства для работы со строками не исп STL string
 *
 *  Разработчики:
 *          Алексеев А.Н., M.Gambarian
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
 * Возвращает истину, если символ - пробельный
 */
extern C_FUN bool isBlank( char C );

/**
 * Возвращает истину, если строка не содержит непробельных символов
 */
extern C_FUN bool isBlankStr( const char * p );

/**
 * Удаляет пробельные символы в начале и конце строки
 */
extern C_FUN char * strEatBlanks( char * S );

/** Удаляет пробельные символы в конце строки
 *
 */
extern C_FUN char * strEatBlankTail( char * S, int Len = 0 );

/** Удаляет пробельные символы в начале строки
 */
extern C_FUN char * strEatBlankHead( char * S );

/**  Ищет первый пробельный символ в строке
 *
 */
extern C_FUN char * strFindSpace( char * S );

/**  Ищет первый пробельный символ в строке, вне кавычек
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
 * Ищет строку в массиве строк
 * Возвращает номер или -1, если строка не найдена
 */
extern C_FUN int StringInArray(
  const char * Array,   ///< Массив
  const char * Str,     ///< Искомая строка
  int StrLen,           ///< Длина строки в массиве
  int StrCount       ///< Количество строк в массиве
);

/** Приводит строку к верхнему регистру
 *
 */
extern C_FUN char * StrUpperCase( char * D, const char * S );

// Приводит строку к нижнему регистру
extern C_FUN char * StrLowerCase( char * D, const char * S );

// Меняет символы строки по маске на заданный
extern C_FUN char * StrChangeByMask( char * Str, const char * Mask, char C );

// Вычисляет сумму символов строки
extern C_FUN UInt32 CSum( const char * S );

// Копирует часть строки от указателя p_begin до указателя p_end
extern C_FUN char *StrCopyBetweenSymbols(
  char * Str,
  const char * p_begin,
  const char * p_end );


/**
 * Добавляет к строке данные по формату
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
    char *buf; ///< указатель на строку со значением clmStr.
    private:
    /**
     * Перезапись строки по формату и списку значений.
     */
    void RewriteInternal( const char * FormatStr, va_list L )
    {
      char * str = new char[ MAXSTRLEN ];
      memset( str, 0, MAXSTRLEN );
      clear();
      
      int Res = vsnprintf( str, MAXSTRLEN, FormatStr, L );
      
      if( Res > 0 )
      {
        if( Res > MAXSTRLEN )   // Если не поместилось...
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
     * проверить, пустая ли строка
     */
    int empty() { return buf[0]==0; }
    /**
     * очистить строку
     */
    void clear() { buf[0] = 0; }
  public:
    /**
     * очистить строку
     */
    void Clear( void ){ clear(); }

    /**
     * Заменить значение строки на новую строку
     * \param S - новое значение строки.
     */
    void Set( const char * S ){ assign( S ); }

    /**
     * Перезапись строки по формату и списку значений
     */
    void Rewrite( const char * FormatStr, ... )
    {
      va_list L;
      va_start( L, FormatStr );
      RewriteInternal( FormatStr, L );
      va_end( L );
    }
    /**
     * вернуть значение как const С строку.
     */
    const char * c_str() const { return buf; }

    /**
     * конструктор пустой строки.
     */
    clmStr( void ){
        //printf("clmStr() constructor called\n");
        buf = new char[MAXSTRLEN];
        buf[0] = 0;
    }
    /**
     * копи конструктор делающий строку равную b
     */
    clmStr(const clmStr &b) {
        buf = new char[MAXSTRLEN];
        assign(b.c_str());
    }
    /**
     * освобождает память внутренней строки.
     */
    virtual ~clmStr() {
        //printf("~clmStr called\n");
        delete []buf;
    }

    /**
     * конструктор с форматированием строки как в printf
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
     * вернуть указатель на буффер или на пустую строку
     */
    operator const char *(){ return( empty()? "": buf ); }
    /**
     * оператор = с естественным смыслом.
     */
    clmStr& operator=(clmStr& rhs) {
        this->assign( rhs.c_str() );
        return *this;
    }
    /**
     * оператор = присваивающий значение строки.
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
 * Разделители - TAB, LF, CR, space
 */
class clmStrSpaceSplitter
{
  protected:
    char * Str;  ///< исходная строка разбиваемая на части помещаемые в S
    int mCount;  ///< количество частей
    pchar * S;   ///< массив подстрок на которые мы разбили Str
    
    void CountSubstrings( void );
    /**
     * Освобождает память.
     */
    void Destroy( void )
    {
      mCount = 0;
      DELETE( Str );
      DELETE( S );
    }
    
  public:
    /**
     * конструктор. Иницииализирует как пустое разбиение.
     */
    clmStrSpaceSplitter( void ): Str( 0 ), S( 0 ){}
    /**
     * Деструктор. Освобождает память.
     */
    ~clmStrSpaceSplitter( void ){ Destroy(); }
    /**
     * Разбивает строку на несколько частей по пробелам.
     */
    void Split( const char * FullStr );
    /**
     * возвращает количество частей в разбиении.
     */
    int Count( void ){ return( mCount ); }
    /**
     * возвращает i-ю часть из разбиения.
     */
    const char * operator[]( int i ){ return( mCount? S[ i ]: 0 ); }
};

#endif
