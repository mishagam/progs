      module Wb_RecordMod
      implicit none

      structure /tstruct/
        integer a(10)
        character*20 s
      end structure

      contains

      subroutine readback(ufile, file_fn,na)
        record /tstruct/ rc
        integer ufile
        character*20 file_fn
        integer buf(10)
        integer i,na

        print *, 'reading file:', '|'// file_fn // '|'
        open(unit=ufile,file=file_fn,form='unformatted',
     *      access='direct', recl=sizeof(rc))
        read(ufile, rec=1) rc
        close(unit=ufile)
        print *, 'read close() passed, a:', (rc.a(i), i=1,na)
      end subroutine readback

      end module Wb_RecordMod

