      module formod
      implicit none  
      
      structure /forstruct/
        integer aaa
        real*4 fff
        real*8 ddd
      end structure
        
      contains

      SUBROUTINE forproc(fors0, fors1, ii, aa)
        record /forstruct/ fors0
        record /forstruct/ fors1
        integer*4 ii
        real*8 aa
        character*80 FILE_NAME      
        integer ERR

        ! reading arguments
        CALL GETARG(1,FILE_NAME(1:),ERR)

        fors0.aaa = 99
        fors0.fff = fors0.aaa + 11
        fors0.ddd = 0.123456789101112131415D0

        fors1.aaa = 88
        fors1.fff = fors1.aaa + 33
        fors1.ddd = 0.987654321098765432109D0
        return
      end SUBROUTINE forproc
      
      subroutine tobuf(fors, buf)
        record /forstruct/ fors
        record /forstruct/ buf
        buf = fors
      end subroutine tobuf

      subroutine frombuf(fors, buf)
        record /forstruct/ fors
        record /forstruct/ buf
        fors = buf
      end subroutine frombuf

      subroutine for2s(a,b)
        character(len=*) a
        character(len=*) b
        print *,'a,b ', a, b
      end subroutine for2s

      end module formod
