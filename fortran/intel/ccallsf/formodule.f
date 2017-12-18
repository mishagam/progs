      module formod
      implicit none 
      
      contains

      subroutine for2s(a,b)
        character*20 a
        character*20 b
        print *,'a ', '|' // trim(a) // '|'
        print *,'b ', b
      end subroutine for2s

      end module formod
