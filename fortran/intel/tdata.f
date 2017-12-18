      program test
      integer ii
      
      print *, 'Testing DATA statement'
      call tdata(ii)
      call tdata(ii)
      end
      
      subroutine tdata(ii)
      integer*4 ii, jj
      data jj/999/
      print *, 'first jj value ', jj
      jj = 77
      print *, 'second jj value ', jj
      end
      
