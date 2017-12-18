      program test
      use Wb_RecordMod
      record /tstruct/ rc
      integer blen,i,na
      integer ufile
      character*20 bin_fn
      
      ! prepare fn and data
      bin_fn = 'writebin.tmp'
      blen = sizeof(rc)/4
      blen=20
      na = 10
      do i=1,na
         rc.a(i) = i
      end do
      rc.s='abcdefghigklmnopqrstuvwxyz'
      print *, 'Test writing binary file ', bin_fn, ' blen=',blen
      ! writes records blen*4 bytes, without length before or after
      open(unit=ufile,file=bin_fn,form='unformatted',
     *     access='direct', recl=blen)
      write(ufile, rec=1) rc
      ! write one record, uses blen*4 bytes, offset blen*4
      write(ufile, rec=2) rc
      write(ufile, rec=4) rc
      close(unit=ufile)
      print *, 'write close passed'
      call readback(ufile, bin_fn, na)
      stop
      end program test
