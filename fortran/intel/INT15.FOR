      INTEGER*2 FUNCTION INITXMS(MAXB)
      use kernel32
	IMPLICIT NONE
      INCLUDE 'INT15.fd'
     
	RECORD /TABLE/ TBL
      INTEGER*4 XMS,MAXB,hndl
      INTEGER*4 ZERO_TABLE, MAX_UNIT,MAX_ALLOC,ret,err
      COMMON /GLOBAL/ ZERO_TABLE,MAX_UNIT
	common/init/hndl
      DATA MAX_ALLOC /25000000/
      IF (MAXB >=0) THEN
	ZERO_TABLE =ZERO(MAX_ALLOC)     ! INSTALL 
      IF (ZERO_TABLE.EQ.0) STOP 'RUN SERVER BEFORE ...' 
      ZERO_TABLE =ZERO_TABLE+8+4+4    ! INSTALL 
	END IF
      IF (MAXB.EQ.0) THEN
          IF(XMS(ZERO_TABLE-8,LOC(TBL),8).EQ.0) GO TO 1
          IF(TBL.START.NE.'STAR') STOP ' NO DATA'
          MAX_UNIT=TBL.SIZE 
      ELSE IF(MAXB > 0) THEN
          MAX_UNIT=MAXB*1.2
          IF(SETZ(MAX_UNIT*8).NE.0) GO TO 1
          TBL.START='STAR'
          TBL.SIZE=MAX_UNIT
          IF(XMS(LOC(TBL),ZERO_TABLE-8,8).EQ.0) GO TO 1
          TBL.ENTR=MAX_UNIT*8          !!!!!!ZERO_TABLE+MAX_UNIT*8
          TBL.SIZE=MAX_ALLOC-(MAX_UNIT+2)*8
          IF(XMS(LOC(TBL),ZERO_TABLE,8).EQ.0) GO TO 1
      ELSE  IF(MAXB ==-3) THEN 
	    ret=0
	    err=XMS(LOC(ret),ZERO_TABLE-8-4-4,4)
		err=UnmapViewOfFile(ZERO_TABLE-8-4-4)
		err=CloseHandle(hndl)
	    INITXMS=err
		return     
	ELSE  IF(MAXB ==-2) THEN 
	    ret=1
	    err=XMS(LOC(ret),ZERO_TABLE-8-4-4,4)
          INITXMS=err
		return     
      ELSE  IF(MAXB ==-1) THEN 
	    err=XMS(ZERO_TABLE-8-4-4,LOC(ret),4)
          INITXMS=ret
		return     
	END IF
      INITXMS=ZERO_TABLE
      ! XXX IF(INITKEYBOARD()==0) STOP 'ERROR WNDPROC CHANGE'
	
	RETURN
    1 STOP 'XMS INIT ERROR' 
      END 
C**********************************************
      INTEGER*4 FUNCTION TEST_UNIT(UNIT,SIZE,XMSOFF,WR)
      IMPLICIT NONE
      INCLUDE 'INT15.fd'
      RECORD /TABLE/ TBL
      INTEGER*4 UNIT,SIZE,XMSOFF,WR
      INTEGER*4 XMS
      INTEGER*4 ZERO_TABLE,MAX_UNIT
      COMMON /GLOBAL/ ZERO_TABLE,MAX_UNIT

      IF(UNIT.GT.MAX_UNIT) STOP 'UNIT LIMIT EXCEED'

      IF(XMS(ZERO_TABLE+UNIT*8,LOC(TBL),8).EQ.0) GO TO 1
      IF (TBL.SIZE.NE.0) THEN
         IF(TBL.SIZE.LT.SIZE+XMSOFF) STOP 'UNIT SIZE EXCEED'
         TEST_UNIT=TBL.ENTR + ZERO_TABLE !!!!!!!
      ELSE
         IF(WR.EQ.0) STOP 'NOTHING TO READ'
         IF(XMS(ZERO_TABLE,LOC(TBL),8).EQ.0) GO TO 1
         TBL.SIZE=TBL.SIZE-SIZE-XMSOFF
         IF(TBL.SIZE.LT.0) STOP 'REACHed XMS END'
	   TEST_UNIT=TBL.ENTR
         TBL.ENTR=TBL.ENTR+SIZE+XMSOFF
         IF(XMS(LOC(TBL),ZERO_TABLE,8).EQ.0) GO TO 1
         TBL.SIZE=SIZE+XMSOFF
         TBL.ENTR=TEST_UNIT
         IF(XMS(LOC(TBL),ZERO_TABLE+UNIT*8,8).EQ.0) GO TO 1
         TEST_UNIT=TEST_UNIT + ZERO_TABLE !!!!!!!
      END IF
      RETURN
    1 STOP 'XMS TEST ERROR'
      END
C**********************************************
      INTEGER*2 FUNCTION PUTXMS(UNIT,SOURCE,XMSOFF,SIZE)
      IMPLICIT NONE
      INCLUDE 'INT15.fd'
      INTEGER*4 UNIT,SOURCE,XMSOFF,SIZE
      INTEGER*4 XMS
      INTEGER*4 TEST_UNIT

      PUTXMS=XMS(SOURCE,TEST_UNIT(UNIT,SIZE,XMSOFF,1)+XMSOFF,
     *SIZE)
      IF(PUTXMS.EQ.0) STOP 'XMS WRITE ERROR'
      END
C**********************************************
      INTEGER*2 FUNCTION GETXMS(UNIT,TARGETX,XMSOFF,SIZE)
      IMPLICIT NONE
      INCLUDE 'INT15.fd'
      INTEGER*4 UNIT,TARGETX,XMSOFF,SIZE
      INTEGER*4 XMS
      INTEGER*4 TEST_UNIT

      GETXMS=XMS(TEST_UNIT(UNIT,SIZE,XMSOFF,0)+XMSOFF,TARGETX,
     *SIZE)
      IF(GETXMS.EQ.0) STOP 'XMS READ ERROR'
      END
C**********************************************
       INTEGER*4 FUNCTION GETTM()
      implicit none
        INTERFACE TO SUBROUTINE 
     *              GST[C,ALIAS:'_GetSystemTime@4'](TS)
        INTEGER*4 TS       
        END 
       STRUCTURE /ST/
       INTEGER*2 YR(4),HR,MIN,SEC,mSEC
       END STRUCTURE 
       RECORD /ST/ SYST
       
       STRUCTURE /MST/
       UNION
       MAP
       INTEGER*1 MIN,HR,SEC01,SEC
       END MAP
       MAP
       INTEGER*4 RET
       END MAP
       END UNION 
       END STRUCTURE 
       RECORD /MST/ MSYST
       CALL GST(LOC(SYST))
       MSYST.MIN=SYST.MIN 
       MSYST.SEC=SYST.SEC 
       MSYST.HR=SYST.HR 
       MSYST.SEC01=SYST.mSEC*10
       GETTM=MSYST.RET 
       END
