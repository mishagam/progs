      program test
      implicit none
      integer ii
      character*20 bin_fn
      integer buf(10)
      integer blen,i
      integer ufile
      
      ! prepare fn and data
      bin_fn = 'writebin.tmp'
      blen = 10
      do i=1,blen
         buf(i) = i
      end do
      print *, 'Test writing binary file ', bin_fn
      open(unit=ufile,file=bin_fn,form='unformatted',
     *     access='direct', recl=blen)
      write(ufile, rec=2) (buf(i), i=1,blen)
      close(unit=ufile)
      print *, 'write close passed'
      call readback(ufile, bin_fn, blen)
      stop
      end
      
      subroutine readback(ufile, file_fn,blen)
        integer ufile
        character*20 file_fn
        integer buf(10)
        integer i,blen

        print *, 'reading file:', '|'// file_fn // '|'
        open(unit=ufile,file=file_fn,form='unformatted',
     *      access='direct', recl=4*blen)
        read(ufile, rec=1) (buf(i), i=1,blen)
        close(unit=ufile)
        print *, 'read close() passed, buf:', (buf(i), i=1,blen)
      end subroutine

