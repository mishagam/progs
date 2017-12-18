      program test
      integer*4 ii, jj
      interface 
         integer*4 function cfun(ii)
            integer*4 ii
         end function
         integer*4 function ffun(ii)
            integer*4 ii
         end function
      end interface
      print *, 'Hello from fortran, calling csub'
      ii = 55
      goto (1000,2000)ii
1000  continue
      jj = cfun(ii)
      print *, 'returned evalue ', jj
      jj = ffun(ii)
2000  print *, 'returned ffun value ', jj
      stop
      end
      
      integer*4 function ffun(ii)
      integer*4 ii, jj
      call csub(ii, jj)
      print *, 'in ffun jj = ', jj
      ffun = jj
      return
      end
      
