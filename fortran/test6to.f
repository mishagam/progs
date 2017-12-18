      implicit real*8(a-h,o-z)
      parameter(mt=1000,nz=30,mk=20,mk1=21,mc=7)
      dimension tim(mt),tinp(mt),qlkk(nz,mt),hfc(mt),dtcool(nz,mt),
     &fastn(nz,mt),z(77),r(100),qla(mt),
     &fla1(nz),dql(nz),pcool(mt),qltek(nz),voltem(7,2)
     &,profi(nz),wgs(6),tmf(6),skr(2,nz),
     &sxe(2,nz),fxe(mk,nz),fkr(mk,nz),fxen(mk,nz),fkrn(mk,nz),grkr(nz),
     &grxe(nz),oldxe(nz,mk),oldkr(nz,mk),gsiz(nz,mk1),
     &gsiz1(nz,mk1),ereloc(nz),dffrict(nz),aref(nz),dtc(nz)
c ,nper(9)! fgri(nz) - FGR iz zoni
c      include'sfc.fh'
      parameter(ncf=124,ncfl=8300)
      common/zz2/ cf(ncf,ncfl)

c      include'cfc.fh'
      parameter(nsf=1254400)
      common/zz1/ sf(nsf)

      character*80 titl
      data n1sf,n2sf,n3sf,frdenr,dent,crou,Pmax,Tmax,time,Smax,pi
     &    /64,30,42,0.98d0,10.97d0,2.48d-3,0.,0.,0.d0,-1.d2,
     &3.1415926535897932384626433832795d0/
      data fgr,akbur2,atmpa! 975% - in fuel
     &/0.d0,0.975d0,0.0980665d0/

      common /bbb/ bl(2000000)

      print *, 'Topra started'
      open(5,file='max-burn')
      np=73
      read(5,*) (tim(i),i=2,np)
      print *, 'M.G. before read 577'
      do 577 j=1,30
  577 read(5,*) aa15,(qlkk(31-j,i),i=2,np)
      print *, 'M.G. before read 578'
      do 578 j=1,30
  578 read(5,*) aa15,(fastn(31-j,i),i=2,np)
      print *, 'M.G. before read 579, np = ', np
      do 579 j=1,30
  579 read(5,*) aa15,(dtcool(31-j,i),i=2,np)
      print *, 'M.G. after read 579'
       close(5)
      print *, 'M.G. after close(5)'
       tim(2)=0.1d0
      open(6, file='res')
      print *, 'M.G. after open res'
      
      print *, 'M.G. after open res'
      open(6, file='res')
      write(6,*) '6666 666'
      close(6)
      return
      end

