      module TimePointDataMod
      implicit none
      structure /TimePointData/
          ! double variables first - so less problems with alignment
          real*8 endh  ! time of start of this step
          real*8 time  ! length of step
          real*8 timeCalSec
          ! flag many files + konec in hours
          integer idx     ! index from start of series
          integer int_inc ! 0 - first, 1 - continue with reading 1.DAT
          integer int_temp
          real*4 timestep ! step in time
          real*4 ql
          real*4 fn
          real*4 pressT
          real*4 pressG
          real*4 tempIn
          real*4 tempOut
          ! layer data
          real*4 qlkoef(16)
          real*4 temp(16)
          real*4 sl(16)  ! burnout if passed with input data
          real*4 fql(16)  ! neutron fluence by layers
      end structure
      real*8 lastTime
      integer nParts

      contains
      
      subroutine ReadTimePointBin(idx, td, timeDataUnit, eof)
        record /TimePointData/ td
        integer timeDataUnit, idx, eof

        read (timeDataUnit, iostat=eof) td
        if (td.idx .NE. idx) then
          print *, "*** different indexes, idx, td.idx = ",idx,td.idx
        end if
        return
      end subroutine ReadTimePointBin

      subroutine ReadTimePoint(idx, td, timeDataUnit, eof)
        record /TimePointData/ td
        integer timeDataUnit
        integer idx, layer
        logical debprint
        common/debcommon/ debprint
        integer fstat, eof
        real*8 avcoef
        logical NORMALIZE_QLKOEF
      
        NORMALIZE_QLKOEF = .false.
        eof = .FALSE.
        debprint = .FALSE.
        read (timeDataUnit, *, iostat=fstat), 
     *         td.idx,td.int_inc,td.int_temp,td.endh
        if (fstat < 0) then
           eof = .TRUE.
           return
        end if
        if (debprint)
     *      print *, 'read td.idx,int_inc,endh=', 
     *               td.idx,td.int_inc,td.int_temp,td.endh
        if (idx .NE. td.idx) then
           print *, '**** wrong idx,td.idx=', idx, td.idx
        end if
        ! ["time", "stepsec",  "ql",  
        !  "resh", "fn",  "davlt",  "davlg", 
        !  "twin",  "twout"]
        nParts = 1
        read (timeDataUnit, *, iostat=fstat), td.time, td.timestep, 
     *     td.ql, td.fn, td.pressT, td.pressG,
     *     td.tempIn, td.tempOut
        td.timestep = td.timestep / nParts
        if (debprint) print *, 'ReadTimePoint,td.ql=', td.ql
        if (fstat < 0) then
           eof = .TRUE.
           return
        end if
        if (debprint)
     *      print *, 'tmh_temp_in_out', td.time, td.tempIn, td.tempOut
        do layer = 1, 16
           read (timeDataUnit, *), td.qlkoef(layer), td.temp(layer),
     *            td.sl(layer), td.fql(layer)
        end do 

        ! normalize qlcoef M.G. dec 25 2014
        if (NORMALIZE_QLKOEF) then
            avcoef = 0.0
            do layer = 1, 16
               avcoef = avcoef + td.qlkoef(layer)
            end do
            avcoef = avcoef / 16  ! theoretically should be 1.0
            do layer = 1, 16
               td.qlkoef(layer) = td.qlkoef(layer) / avcoef
            end do
        end if

        layer = 16
        if (debprint)
     *      print *, 'last_layer', td.qlkoef(layer), td.temp(layer) 
      end subroutine ReadTimePoint

      ! subroutine UpdateDataArray(timedata, timedataNext, inp,STW)
      
      ! subroutine SetTimePointData(tmdat, ii, inp,STW)

      ! subroutine UpdateData(timedata, STINPUT)
      
      INTEGER function CheckTdPoint(td)
        record /TimePointData/ td
        INTEGER i
        
        if (td.time <= 0 .OR. td.time > 3600*24*1000) then
            print *, '*** Illegal  time= ', td.time
            CheckTdPoint = 0
            return
        end if
        if (td.timestep <= 0 .OR. td.timestep > 3600*24*100*5) then
            print *, '*** Illegal  timestep= ', td.timestep
            CheckTdPoint = 0
            return
        end if
        if (td.ql < 0 .OR. td.ql > 50) then
            print *, '*** Illegal QL= ', td.ql
            CheckTdPoint = 0
            return
        end if
        if (td.fn < 0 .OR. td.fn > 40) then
            print *, '*** Illegal FN= ', td.fn
            CheckTdPoint = 0
            return
        end if
        if (td.pressT < 0 .OR. td.pressT > 4) then
            print *, '*** Illegal pressT= ', td.pressT
            CheckTdPoint = 0
            return
        end if
        if (td.pressG < 0 .OR. td.pressG > 4) then
            print *, '*** Illegal pressG= ', td.pressG
            CheckTdPoint = 0
            return
        end if
        if (td.tempIn < 200 .OR. td.tempIn > 750) then
            print *, '*** Illegal tempIn= ', td.tempIn
            CheckTdPoint = 0
            return
        end if
        if (td.tempOut < 200 .OR. td.tempOut > 750) then
            print *, '*** Illegal tempOut= ', td.tempOut
            CheckTdPoint = 0
            return
        end if
        do i = 1, 16
            if (td.qlkoef(i) < 0 .OR. td.qlkoef(i) > 20) then
                print *, '*** Illegal i,qlkoef(i)= ',i,td.qlkoef(i)
                CheckTdPoint = 0
                return
            end if
            if (td.temp(i) < 200 .OR. td.temp(i) > 750) then
                print *, '*** Illegal i,temp(i)= ',i,td.temp(i)
                CheckTdPoint = 0
                return
            end if
            ! ToDo need check on SL
        end do

        CheckTdPoint = 1
      end function CheckTdPoint

      end module TimePointDataMod 
