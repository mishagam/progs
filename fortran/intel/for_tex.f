      subroutine SubTex
      real x(12)
      integer idx
      
      idx = 19
      print *, 'we are inside fortran SubTex'
      x(idx) = 99
      print *, 'Illegal array assignment passed, x(19)='
      print *, 'x(19)=', x(idx) 
      return
      end subroutine