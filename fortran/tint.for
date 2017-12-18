      program testInterface
      
      ! Interface
      INTERFACE
         INTEGER*2 FUNCTION aaa()
         end function
      END INTERFACE

      ! ========== Program =========
      integer*2 a
      a = aaa()
      print * , 'a = ', a
      stop 
      end
      
      ! ========== Function =========
      integer*2 function aaa()
      aaa = 777
      return 
      end
      
    