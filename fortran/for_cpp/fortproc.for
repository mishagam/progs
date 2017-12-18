      subroutine fortproc
      print *, 'fortproc started'
      call cproc("AAA"//char(0), "bbbbbb"//char(0), 35);
      return
      end
