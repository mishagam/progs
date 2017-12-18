      print *, 'M.G. before open res'
      open(6, file='res')
      print *, 'M.G. after open res'
      write(6,*) '6666 666'
      close(6)
      print *, 'M.G. attempt to print after close(6)'
      return
      end

