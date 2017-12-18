      program tfile
      integer*4 ii, jj
      integer fstat

      open(UNIT=11, FILE='numbers.txt', IOSTAT=fstat,status='old')
      print *, 'file opened, fstat = ', fstat
      do i=1,100
        read(11,*, iostat=fstat) ii, jj
        if (fstat < 0) then
           print *, 'end of file, fstat = ', fstat
           exit
        end if
        print *, 'ii,jj= ', ii, jj
      end do
      close(11)      
      end
      
