      print *, 'M.G. before open res'
      open(8, file='res')
      print *, 'M.G. after open res'
      write(8,*) '6666 666'
      close(8)
      print *, 'M.G. attempt to print after close(8)'
      return
      end

