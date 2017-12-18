!  TFortran.f90 
!
!  FUNCTIONS:
!  TFortran - Entry point of console application.
!

    program TFortran    
      call TestString      
    end program TFortran
    
    ! testing string, index find, substring trim, conversion to float
    subroutine TestString
      character*40 s
      integer ifile
      character*20 key
      character*20 val
     
      ifile = 9      
      print *, 'TestString called'
      s = trim("SOB=88.99")
      print *, 's= |', trim(s), "|"
      print *, 'substr24= |', s(2:5)
      print *, 'index = ', index(s, "=")
      print *, 'index / ', index(s, "/")
      print *, 'index SO ', index(s, "SO")
      
      OPEN(UNIT=ifile,FILE='ttt.txt',FORM='FORMATTED',STATUS='OLD')
      call read_pair(ifile, key, val)
      print *, 'key,val= ', key, val
      call read_pair(ifile, key, val)
      print *, 'key,val= ', key, val
      call read_pair(ifile, key, val)
      print *, 'key,val= ', key, val
      CLOSE(UNIT=ifile)
      stop
    end subroutine TestString
    
    subroutine read_pair(ifile, key, val)
      character*20 key
      character*20 val
      integer ifile
      character*40 s
      integer idxEqu
      
      read (ifile,"(A40)") s
      if (s(1:1).EQ.'#') then
          key="comment"
          val = s
          return
      end if
      idxEqu = index(s,'=')
      key = s(1 : (idxEqu-1))
      val = trim(s((idxEqu+1):40))
    end subroutine read_pair
      
      
      
    

