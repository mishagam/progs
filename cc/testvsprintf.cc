#include <stdio.h>
#include <stdarg.h>

// testing some code from clStr

const int MAXSTRLEN = 255;

   char * str;		// Указатель на строку
    size_t length;	// Длина строки
    size_t size;	// Размер буфера
  
    void Resize( size_t Len )
    {
      // DELETE( str );
      length = 0;
      size = Len;
      str = new char[ size ];
	  str[0] = 0;
    }
 // Перезапись строки по формату и списку значений.
  void Rewrite1( const char * FormatStr, va_list L )
  {
	Resize( MAXSTRLEN );
	
	printf("calling vsnprintf, str: %p, size= %d, \n", str, size);
	int Res = vsnprintf( str, size, FormatStr, L );
	printf("vsnprintf passed\n");
	
	if( Res < 0 ) return;		// В старых библиотеках, если не поместилось...
	else if( Res > ( int )size )	// Если не поместилось...
	{
	  Resize( Res + 1 );	// Увеличиваем буфер, с учётом '\0' в конце строки
	  Res = vsnprintf( str, size, FormatStr, L );
	}
  }

  // Перезапись строки по формату и списку значений.
  void Rewrite2( const char * FormatStr, ... )
  {
	va_list L;
	va_start( L, FormatStr );
	Rewrite1( FormatStr, L );
	va_end( L );
  }

int main() {
  Rewrite2("New value %s", "mskfjsdalfkj");
  printf("Passed, str = %s\n", str);
  return 0;
}
