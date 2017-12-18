      program read_rec
      use TimePointDataMod

      record /TimePointData/ td
      integer tdFile,i,eof
      character*80 TD_FILE_NAME
      real*4 x,y
      integer a,b,c

      TD_FILE_NAME = "test_timedata.dat"
      tdFile = 11
      OPEN(UNIT=tdFile, FILE=TD_FILE_NAME,
     *     FORM='UNFORMATTED', STATUS='OLD')
      do i=1,5
        call ReadTimePointBin(i, td, tdFile, eof)
        print *, 'td.idx, fq16 = ', td.idx, td.fql(16)
      end do
      CLOSE (UNIT=tdFile)

      print *, 'td endh= ', td.endh
      stop

      end program read_rec
