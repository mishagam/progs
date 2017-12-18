      program teststr
      character*80 a
      character*80 b
      a = "abcdefgh"
      b = a(2:5)
      print *, 'a:', TRIM(a)
      print *, TRIM('b:'), TRIM(b),' a//b:', TRIM(a//b)
      write (b,*) 'some text goes to b',9999
      print *,b
      stop      
      end
