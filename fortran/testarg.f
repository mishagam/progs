      program testarg
      character*10 filename
      integer fnum
      integer ii
      character *25 arg
      fnum = 99
      print *, 'reading file from arg 1'
      call getarg(1, arg)
      print *, 'reading arg filename: ', arg
      open(unit=9, file=arg)
      read(9, *) ii
      close(9)
      print *, 'ii from arg file = ', ii
      print *, 'testarg - reading file test99.txt'
      write(filename, 100) 'test', fnum, '.txt'
100   format(A4I2.2A4)
      print *, 'got filename ', filename
      open(unit=10, file=filename);
      read (10, *) ii
      print *, 'ii = ', ii
      close(10)
      stop
      end

