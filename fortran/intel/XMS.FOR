      integer function zero(length)
      use kernel32
      use dfwbase
      !include 'qwkdef.fd'
	integer length,ret,hndl
	common/init/ hndl
      hndl = OpenFileMapping(FILE_MAP_ALL_ACCESS,
     *.FALSE.,'000000001111111122222222'C);
      ret =MapViewOfFile(hndl,FILE_MAP_ALL_ACCESS,0,0,8)
	call CopyMemory(loc(length),ret+4,4)
	ret=UnmapViewOfFile(ret)
      zero=MapViewOfFile(hndl,FILE_MAP_ALL_ACCESS,0,0,length)
      ! XXX adding debug print M.G.
      ! print *, 'XMS . zero() called, length = ', length
       hmem=zero	
 	end
      
	integer function xms(source, dest, length)
      use DFWBASE
	integer source,dest,length
      call CopyMemory(dest,source,length)
      xms=memcmp(source,dest,4)
	if(xms.eq.0) xms=length
	end
      
	integer function setz(length)
      use DFWBASE
      !include 'qwkdef.fd'
      integer*1 buf(100)
      integer length
      call ZeroMemory(hmem+8,length)
	setz=memcmp(hmem+8,loc(buf),100)
	end
