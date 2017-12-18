
/tmp/build52ccc96124f7eef6833686108f2a2d1d.tmp/MisOscillo.ino.elf:     file format elf32-avr


Disassembly of section .text:

00000000 <__vectors>:
}

void __cxa_deleted_virtual(void) {
  // We might want to write some diagnostics to uart in this case
  //std::terminate();
  abort();
   0:	0c 94 62 00 	jmp	0xc4	; 0xc4 <__ctors_end>
   4:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
   8:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
   c:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  10:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  14:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  18:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  1c:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  20:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  24:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  28:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  2c:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  30:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  34:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  38:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  3c:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  40:	0c 94 96 04 	jmp	0x92c	; 0x92c <__vector_16>
  44:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  48:	0c 94 2b 03 	jmp	0x656	; 0x656 <__vector_18>
  4c:	0c 94 5d 03 	jmp	0x6ba	; 0x6ba <__vector_19>
  50:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  54:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  58:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  5c:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  60:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  64:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>

00000068 <__trampolines_end>:
  68:	00 00       	nop
  6a:	00 08       	sbc	r0, r0
  6c:	00 02       	muls	r16, r16
  6e:	01 00       	.word	0x0001	; ????
  70:	00 03       	mulsu	r16, r16
  72:	04 07       	cpc	r16, r20
	...

0000007c <digital_pin_to_bit_mask_PGM>:
  7c:	01 02 04 08 10 20 40 80 01 02 04 08 10 20 01 02     ..... @...... ..
  8c:	04 08 10 20                                         ... 

00000090 <digital_pin_to_port_PGM>:
  90:	04 04 04 04 04 04 04 04 02 02 02 02 02 02 03 03     ................
  a0:	03 03 03 03                                         ....

000000a4 <port_to_input_PGM>:
  a4:	00 00 00 00 23 00 26 00 29 00                       ....#.&.).

000000ae <port_to_output_PGM>:
  ae:	00 00 00 00 25 00 28 00 2b 00                       ....%.(.+.

000000b8 <port_to_mode_PGM>:
  b8:	00 00 00 00 24 00 27 00 2a 00                       ....$.'.*.

000000c2 <__ctors_start>:
  c2:	8d 03       	fmulsu	r16, r21

000000c4 <__ctors_end>:
  c4:	11 24       	eor	r1, r1
  c6:	1f be       	out	0x3f, r1	; 63
  c8:	cf ef       	ldi	r28, 0xFF	; 255
  ca:	d8 e0       	ldi	r29, 0x08	; 8
  cc:	de bf       	out	0x3e, r29	; 62
  ce:	cd bf       	out	0x3d, r28	; 61

000000d0 <__do_copy_data>:
  d0:	11 e0       	ldi	r17, 0x01	; 1
  d2:	a0 e0       	ldi	r26, 0x00	; 0
  d4:	b1 e0       	ldi	r27, 0x01	; 1
  d6:	ea e8       	ldi	r30, 0x8A	; 138
  d8:	fa e0       	ldi	r31, 0x0A	; 10
  da:	02 c0       	rjmp	.+4      	; 0xe0 <__do_copy_data+0x10>
  dc:	05 90       	lpm	r0, Z+
  de:	0d 92       	st	X+, r0
  e0:	a8 32       	cpi	r26, 0x28	; 40
  e2:	b1 07       	cpc	r27, r17
  e4:	d9 f7       	brne	.-10     	; 0xdc <__do_copy_data+0xc>

000000e6 <__do_clear_bss>:
  e6:	22 e0       	ldi	r18, 0x02	; 2
  e8:	a8 e2       	ldi	r26, 0x28	; 40
  ea:	b1 e0       	ldi	r27, 0x01	; 1
  ec:	01 c0       	rjmp	.+2      	; 0xf0 <.do_clear_bss_start>

000000ee <.do_clear_bss_loop>:
  ee:	1d 92       	st	X+, r1

000000f0 <.do_clear_bss_start>:
  f0:	a8 39       	cpi	r26, 0x98	; 152
  f2:	b2 07       	cpc	r27, r18
  f4:	e1 f7       	brne	.-8      	; 0xee <.do_clear_bss_loop>

000000f6 <__do_global_ctors>:
  f6:	10 e0       	ldi	r17, 0x00	; 0
  f8:	c4 ec       	ldi	r28, 0xC4	; 196
  fa:	d0 e0       	ldi	r29, 0x00	; 0
  fc:	04 c0       	rjmp	.+8      	; 0x106 <__do_global_ctors+0x10>
  fe:	22 97       	sbiw	r28, 0x02	; 2
 100:	fe 01       	movw	r30, r28
 102:	0e 94 3f 05 	call	0xa7e	; 0xa7e <__tablejump__>
 106:	c2 3c       	cpi	r28, 0xC2	; 194
 108:	d1 07       	cpc	r29, r17
 10a:	c9 f7       	brne	.-14     	; 0xfe <__do_global_ctors+0x8>
 10c:	0e 94 87 04 	call	0x90e	; 0x90e <main>
 110:	0c 94 43 05 	jmp	0xa86	; 0xa86 <_exit>

00000114 <__bad_interrupt>:
 114:	0c 94 00 00 	jmp	0	; 0x0 <__vectors>

00000118 <setup>:
  public:
    inline HardwareSerial(
      volatile uint8_t *ubrrh, volatile uint8_t *ubrrl,
      volatile uint8_t *ucsra, volatile uint8_t *ucsrb,
      volatile uint8_t *ucsrc, volatile uint8_t *udr);
    void begin(unsigned long baud) { begin(baud, SERIAL_8N1); }
 118:	26 e0       	ldi	r18, 0x06	; 6
 11a:	40 e8       	ldi	r20, 0x80	; 128
 11c:	55 e2       	ldi	r21, 0x25	; 37
 11e:	60 e0       	ldi	r22, 0x00	; 0
 120:	70 e0       	ldi	r23, 0x00	; 0
 122:	82 ef       	ldi	r24, 0xF2	; 242
 124:	91 e0       	ldi	r25, 0x01	; 1
 126:	0e 94 c9 02 	call	0x592	; 0x592 <_ZN14HardwareSerial5beginEmh>
 
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  Serial.begin(9600);
  pinMode(lineA, INPUT);
 12a:	60 e0       	ldi	r22, 0x00	; 0
 12c:	80 91 04 01 	lds	r24, 0x0104
 130:	0e 94 4e 01 	call	0x29c	; 0x29c <pinMode>
  pinMode(lineB, INPUT);
 134:	60 e0       	ldi	r22, 0x00	; 0
 136:	80 91 02 01 	lds	r24, 0x0102
 13a:	0e 94 4e 01 	call	0x29c	; 0x29c <pinMode>
  pinMode(ledAB, OUTPUT);
 13e:	61 e0       	ldi	r22, 0x01	; 1
 140:	80 91 00 01 	lds	r24, 0x0100
 144:	0c 94 4e 01 	jmp	0x29c	; 0x29c <pinMode>

00000148 <_Z12recordSignalv>:
    idx = 0;
  }
}

// initializing buffer by beforeCnt 1-s
void recordSignal() {
 148:	cf 93       	push	r28
 14a:	ea e2       	ldi	r30, 0x2A	; 42
 14c:	f1 e0       	ldi	r31, 0x01	; 1
  byte la,lb,lab;
  for (int i=0; i<BEFORE_CNT; i++) {
    obuf[i] = 3;
 14e:	83 e0       	ldi	r24, 0x03	; 3
 150:	81 93       	st	Z+, r24
}

// initializing buffer by beforeCnt 1-s
void recordSignal() {
  byte la,lb,lab;
  for (int i=0; i<BEFORE_CNT; i++) {
 152:	91 e0       	ldi	r25, 0x01	; 1
 154:	e4 33       	cpi	r30, 0x34	; 52
 156:	f9 07       	cpc	r31, r25
 158:	d9 f7       	brne	.-10     	; 0x150 <_Z12recordSignalv+0x8>
    obuf[i] = 3;
  }
  idx = BEFORE_CNT;
 15a:	8a e0       	ldi	r24, 0x0A	; 10
 15c:	90 e0       	ldi	r25, 0x00	; 0
 15e:	90 93 29 01 	sts	0x0129, r25
 162:	80 93 28 01 	sts	0x0128, r24
  for (; idx<N-2; ) {
 166:	80 91 28 01 	lds	r24, 0x0128
 16a:	90 91 29 01 	lds	r25, 0x0129
 16e:	86 3c       	cpi	r24, 0xC6	; 198
 170:	91 05       	cpc	r25, r1
 172:	e4 f4       	brge	.+56     	; 0x1ac <_Z12recordSignalv+0x64>
     la = digitalRead(lineA);
 174:	80 91 04 01 	lds	r24, 0x0104
 178:	0e 94 bd 01 	call	0x37a	; 0x37a <digitalRead>
 17c:	c8 2f       	mov	r28, r24
     lb = digitalRead(lineB);
 17e:	80 91 02 01 	lds	r24, 0x0102
 182:	0e 94 bd 01 	call	0x37a	; 0x37a <digitalRead>
     lab = la+la + lb;
     obuf[idx++] = lab;
 186:	20 91 28 01 	lds	r18, 0x0128
 18a:	30 91 29 01 	lds	r19, 0x0129
 18e:	a9 01       	movw	r20, r18
 190:	4f 5f       	subi	r20, 0xFF	; 255
 192:	5f 4f       	sbci	r21, 0xFF	; 255
 194:	50 93 29 01 	sts	0x0129, r21
 198:	40 93 28 01 	sts	0x0128, r20
 19c:	f9 01       	movw	r30, r18
 19e:	e6 5d       	subi	r30, 0xD6	; 214
 1a0:	fe 4f       	sbci	r31, 0xFE	; 254
  }
  idx = BEFORE_CNT;
  for (; idx<N-2; ) {
     la = digitalRead(lineA);
     lb = digitalRead(lineB);
     lab = la+la + lb;
 1a2:	9c 2f       	mov	r25, r28
 1a4:	99 0f       	add	r25, r25
 1a6:	98 0f       	add	r25, r24
     obuf[idx++] = lab;
 1a8:	90 83       	st	Z, r25
 1aa:	dd cf       	rjmp	.-70     	; 0x166 <_Z12recordSignalv+0x1e>
  }
}
 1ac:	cf 91       	pop	r28
 1ae:	08 95       	ret

000001b0 <_Z6endRecv>:

void endRec() {
 1b0:	cf 93       	push	r28
 1b2:	df 93       	push	r29
 1b4:	ca e2       	ldi	r28, 0x2A	; 42
 1b6:	d1 e0       	ldi	r29, 0x01	; 1
  for (int i=0; i<idx; i++) {
 1b8:	80 91 28 01 	lds	r24, 0x0128
 1bc:	90 91 29 01 	lds	r25, 0x0129
 1c0:	9e 01       	movw	r18, r28
 1c2:	2a 52       	subi	r18, 0x2A	; 42
 1c4:	31 40       	sbci	r19, 0x01	; 1
 1c6:	28 17       	cp	r18, r24
 1c8:	39 07       	cpc	r19, r25
 1ca:	6c f4       	brge	.+26     	; 0x1e6 <_Z6endRecv+0x36>
    Serial.print(obuf[i]);
 1cc:	69 91       	ld	r22, Y+
 1ce:	4a e0       	ldi	r20, 0x0A	; 10
 1d0:	50 e0       	ldi	r21, 0x00	; 0
 1d2:	82 ef       	ldi	r24, 0xF2	; 242
 1d4:	91 e0       	ldi	r25, 0x01	; 1
 1d6:	0e 94 7f 04 	call	0x8fe	; 0x8fe <_ZN5Print5printEhi>
    Serial.print(',');
 1da:	6c e2       	ldi	r22, 0x2C	; 44
 1dc:	82 ef       	ldi	r24, 0xF2	; 242
 1de:	91 e0       	ldi	r25, 0x01	; 1
 1e0:	0e 94 0e 04 	call	0x81c	; 0x81c <_ZN5Print5printEc>
 1e4:	e9 cf       	rjmp	.-46     	; 0x1b8 <_Z6endRecv+0x8>
  }
  Serial.println();
 1e6:	82 ef       	ldi	r24, 0xF2	; 242
 1e8:	91 e0       	ldi	r25, 0x01	; 1
 1ea:	0e 94 15 04 	call	0x82a	; 0x82a <_ZN5Print7printlnEv>
  idx=0;
 1ee:	10 92 29 01 	sts	0x0129, r1
 1f2:	10 92 28 01 	sts	0x0128, r1
}
 1f6:	df 91       	pop	r29
 1f8:	cf 91       	pop	r28
 1fa:	08 95       	ret

000001fc <loop>:
bool startingCondition(int la, int lb) {
  return la==0;
}

// the loop function runs over and over again forever
void loop() {
 1fc:	1f 93       	push	r17
 1fe:	cf 93       	push	r28
 200:	df 93       	push	r29
  int la = digitalRead(lineA);
 202:	80 91 04 01 	lds	r24, 0x0104
 206:	0e 94 bd 01 	call	0x37a	; 0x37a <digitalRead>
 20a:	ec 01       	movw	r28, r24
  int lb = digitalRead(lineB);
 20c:	80 91 02 01 	lds	r24, 0x0102
 210:	0e 94 bd 01 	call	0x37a	; 0x37a <digitalRead>
  int lab = la;
  digitalWrite(ledAB, !lab);  
 214:	11 e0       	ldi	r17, 0x01	; 1
 216:	cd 2b       	or	r28, r29
 218:	09 f0       	breq	.+2      	; 0x21c <loop+0x20>
 21a:	10 e0       	ldi	r17, 0x00	; 0
 21c:	61 2f       	mov	r22, r17
 21e:	80 91 00 01 	lds	r24, 0x0100
 222:	0e 94 87 01 	call	0x30e	; 0x30e <digitalWrite>
  if (startingCondition(la,lb)) {
 226:	11 23       	and	r17, r17
 228:	61 f0       	breq	.+24     	; 0x242 <loop+0x46>
    // Serial.println("Start recording");
    recordSignal();  
 22a:	0e 94 a4 00 	call	0x148	; 0x148 <_Z12recordSignalv>
    digitalWrite(ledAB, LOW);  
 22e:	60 e0       	ldi	r22, 0x00	; 0
 230:	80 91 00 01 	lds	r24, 0x0100
 234:	0e 94 87 01 	call	0x30e	; 0x30e <digitalWrite>
    endRec();
  }
}
 238:	df 91       	pop	r29
 23a:	cf 91       	pop	r28
 23c:	1f 91       	pop	r17
  digitalWrite(ledAB, !lab);  
  if (startingCondition(la,lb)) {
    // Serial.println("Start recording");
    recordSignal();  
    digitalWrite(ledAB, LOW);  
    endRec();
 23e:	0c 94 d8 00 	jmp	0x1b0	; 0x1b0 <_Z6endRecv>
  }
}
 242:	df 91       	pop	r29
 244:	cf 91       	pop	r28
 246:	1f 91       	pop	r17
 248:	08 95       	ret

0000024a <turnOffPWM>:
//
//static inline void turnOffPWM(uint8_t timer) __attribute__ ((always_inline));
//static inline void turnOffPWM(uint8_t timer)
static void turnOffPWM(uint8_t timer)
{
	switch (timer)
 24a:	83 30       	cpi	r24, 0x03	; 3
 24c:	81 f0       	breq	.+32     	; 0x26e <turnOffPWM+0x24>
 24e:	28 f4       	brcc	.+10     	; 0x25a <turnOffPWM+0x10>
 250:	81 30       	cpi	r24, 0x01	; 1
 252:	99 f0       	breq	.+38     	; 0x27a <turnOffPWM+0x30>
 254:	82 30       	cpi	r24, 0x02	; 2
 256:	a1 f0       	breq	.+40     	; 0x280 <turnOffPWM+0x36>
 258:	08 95       	ret
 25a:	87 30       	cpi	r24, 0x07	; 7
 25c:	a9 f0       	breq	.+42     	; 0x288 <turnOffPWM+0x3e>
 25e:	88 30       	cpi	r24, 0x08	; 8
 260:	b9 f0       	breq	.+46     	; 0x290 <turnOffPWM+0x46>
 262:	84 30       	cpi	r24, 0x04	; 4
 264:	d1 f4       	brne	.+52     	; 0x29a <turnOffPWM+0x50>
	{
		#if defined(TCCR1A) && defined(COM1A1)
		case TIMER1A:   cbi(TCCR1A, COM1A1);    break;
		#endif
		#if defined(TCCR1A) && defined(COM1B1)
		case TIMER1B:   cbi(TCCR1A, COM1B1);    break;
 266:	80 91 80 00 	lds	r24, 0x0080
 26a:	8f 7d       	andi	r24, 0xDF	; 223
 26c:	03 c0       	rjmp	.+6      	; 0x274 <turnOffPWM+0x2a>
static void turnOffPWM(uint8_t timer)
{
	switch (timer)
	{
		#if defined(TCCR1A) && defined(COM1A1)
		case TIMER1A:   cbi(TCCR1A, COM1A1);    break;
 26e:	80 91 80 00 	lds	r24, 0x0080
 272:	8f 77       	andi	r24, 0x7F	; 127
		#endif
		#if defined(TCCR1A) && defined(COM1B1)
		case TIMER1B:   cbi(TCCR1A, COM1B1);    break;
 274:	80 93 80 00 	sts	0x0080, r24
 278:	08 95       	ret
		#if defined(TCCR2) && defined(COM21)
		case  TIMER2:   cbi(TCCR2, COM21);      break;
		#endif
		
		#if defined(TCCR0A) && defined(COM0A1)
		case  TIMER0A:  cbi(TCCR0A, COM0A1);    break;
 27a:	84 b5       	in	r24, 0x24	; 36
 27c:	8f 77       	andi	r24, 0x7F	; 127
 27e:	02 c0       	rjmp	.+4      	; 0x284 <turnOffPWM+0x3a>
		#endif
		
		#if defined(TCCR0A) && defined(COM0B1)
		case  TIMER0B:  cbi(TCCR0A, COM0B1);    break;
 280:	84 b5       	in	r24, 0x24	; 36
 282:	8f 7d       	andi	r24, 0xDF	; 223
 284:	84 bd       	out	0x24, r24	; 36
 286:	08 95       	ret
		#endif
		#if defined(TCCR2A) && defined(COM2A1)
		case  TIMER2A:  cbi(TCCR2A, COM2A1);    break;
 288:	80 91 b0 00 	lds	r24, 0x00B0
 28c:	8f 77       	andi	r24, 0x7F	; 127
 28e:	03 c0       	rjmp	.+6      	; 0x296 <turnOffPWM+0x4c>
		#endif
		#if defined(TCCR2A) && defined(COM2B1)
		case  TIMER2B:  cbi(TCCR2A, COM2B1);    break;
 290:	80 91 b0 00 	lds	r24, 0x00B0
 294:	8f 7d       	andi	r24, 0xDF	; 223
 296:	80 93 b0 00 	sts	0x00B0, r24
 29a:	08 95       	ret

0000029c <pinMode>:
#define ARDUINO_MAIN
#include "wiring_private.h"
#include "pins_arduino.h"

void pinMode(uint8_t pin, uint8_t mode)
{
 29c:	cf 93       	push	r28
 29e:	df 93       	push	r29
	uint8_t bit = digitalPinToBitMask(pin);
 2a0:	90 e0       	ldi	r25, 0x00	; 0
 2a2:	fc 01       	movw	r30, r24
 2a4:	e4 58       	subi	r30, 0x84	; 132
 2a6:	ff 4f       	sbci	r31, 0xFF	; 255
 2a8:	24 91       	lpm	r18, Z
	uint8_t port = digitalPinToPort(pin);
 2aa:	fc 01       	movw	r30, r24
 2ac:	e0 57       	subi	r30, 0x70	; 112
 2ae:	ff 4f       	sbci	r31, 0xFF	; 255
 2b0:	84 91       	lpm	r24, Z
	volatile uint8_t *reg, *out;

	if (port == NOT_A_PIN) return;
 2b2:	88 23       	and	r24, r24
 2b4:	49 f1       	breq	.+82     	; 0x308 <pinMode+0x6c>

	// JWS: can I let the optimizer do this?
	reg = portModeRegister(port);
 2b6:	90 e0       	ldi	r25, 0x00	; 0
 2b8:	88 0f       	add	r24, r24
 2ba:	99 1f       	adc	r25, r25
 2bc:	fc 01       	movw	r30, r24
 2be:	e8 54       	subi	r30, 0x48	; 72
 2c0:	ff 4f       	sbci	r31, 0xFF	; 255
 2c2:	a5 91       	lpm	r26, Z+
 2c4:	b4 91       	lpm	r27, Z
	out = portOutputRegister(port);
 2c6:	82 55       	subi	r24, 0x52	; 82
 2c8:	9f 4f       	sbci	r25, 0xFF	; 255
 2ca:	fc 01       	movw	r30, r24
 2cc:	c5 91       	lpm	r28, Z+
 2ce:	d4 91       	lpm	r29, Z

	if (mode == INPUT) { 
		uint8_t oldSREG = SREG;
 2d0:	9f b7       	in	r25, 0x3f	; 63

	// JWS: can I let the optimizer do this?
	reg = portModeRegister(port);
	out = portOutputRegister(port);

	if (mode == INPUT) { 
 2d2:	61 11       	cpse	r22, r1
 2d4:	08 c0       	rjmp	.+16     	; 0x2e6 <pinMode+0x4a>
		uint8_t oldSREG = SREG;
                cli();
 2d6:	f8 94       	cli
		*reg &= ~bit;
 2d8:	8c 91       	ld	r24, X
 2da:	20 95       	com	r18
 2dc:	82 23       	and	r24, r18
 2de:	8c 93       	st	X, r24
		*out &= ~bit;
 2e0:	88 81       	ld	r24, Y
 2e2:	82 23       	and	r24, r18
 2e4:	0a c0       	rjmp	.+20     	; 0x2fa <pinMode+0x5e>
		SREG = oldSREG;
	} else if (mode == INPUT_PULLUP) {
 2e6:	62 30       	cpi	r22, 0x02	; 2
 2e8:	51 f4       	brne	.+20     	; 0x2fe <pinMode+0x62>
		uint8_t oldSREG = SREG;
                cli();
 2ea:	f8 94       	cli
		*reg &= ~bit;
 2ec:	8c 91       	ld	r24, X
 2ee:	32 2f       	mov	r19, r18
 2f0:	30 95       	com	r19
 2f2:	83 23       	and	r24, r19
 2f4:	8c 93       	st	X, r24
		*out |= bit;
 2f6:	88 81       	ld	r24, Y
 2f8:	82 2b       	or	r24, r18
 2fa:	88 83       	st	Y, r24
 2fc:	04 c0       	rjmp	.+8      	; 0x306 <pinMode+0x6a>
		SREG = oldSREG;
	} else {
		uint8_t oldSREG = SREG;
                cli();
 2fe:	f8 94       	cli
		*reg |= bit;
 300:	8c 91       	ld	r24, X
 302:	82 2b       	or	r24, r18
 304:	8c 93       	st	X, r24
		SREG = oldSREG;
 306:	9f bf       	out	0x3f, r25	; 63
	}
}
 308:	df 91       	pop	r29
 30a:	cf 91       	pop	r28
 30c:	08 95       	ret

0000030e <digitalWrite>:
		#endif
	}
}

void digitalWrite(uint8_t pin, uint8_t val)
{
 30e:	0f 93       	push	r16
 310:	1f 93       	push	r17
 312:	cf 93       	push	r28
 314:	df 93       	push	r29
 316:	1f 92       	push	r1
 318:	cd b7       	in	r28, 0x3d	; 61
 31a:	de b7       	in	r29, 0x3e	; 62
	uint8_t timer = digitalPinToTimer(pin);
 31c:	28 2f       	mov	r18, r24
 31e:	30 e0       	ldi	r19, 0x00	; 0
 320:	f9 01       	movw	r30, r18
 322:	e8 59       	subi	r30, 0x98	; 152
 324:	ff 4f       	sbci	r31, 0xFF	; 255
 326:	84 91       	lpm	r24, Z
	uint8_t bit = digitalPinToBitMask(pin);
 328:	f9 01       	movw	r30, r18
 32a:	e4 58       	subi	r30, 0x84	; 132
 32c:	ff 4f       	sbci	r31, 0xFF	; 255
 32e:	14 91       	lpm	r17, Z
	uint8_t port = digitalPinToPort(pin);
 330:	f9 01       	movw	r30, r18
 332:	e0 57       	subi	r30, 0x70	; 112
 334:	ff 4f       	sbci	r31, 0xFF	; 255
 336:	04 91       	lpm	r16, Z
	volatile uint8_t *out;

	if (port == NOT_A_PIN) return;
 338:	00 23       	and	r16, r16
 33a:	c9 f0       	breq	.+50     	; 0x36e <digitalWrite+0x60>

	// If the pin that support PWM output, we need to turn it off
	// before doing a digital write.
	if (timer != NOT_ON_TIMER) turnOffPWM(timer);
 33c:	88 23       	and	r24, r24
 33e:	21 f0       	breq	.+8      	; 0x348 <digitalWrite+0x3a>
 340:	69 83       	std	Y+1, r22	; 0x01
 342:	0e 94 25 01 	call	0x24a	; 0x24a <turnOffPWM>
 346:	69 81       	ldd	r22, Y+1	; 0x01

	out = portOutputRegister(port);
 348:	e0 2f       	mov	r30, r16
 34a:	f0 e0       	ldi	r31, 0x00	; 0
 34c:	ee 0f       	add	r30, r30
 34e:	ff 1f       	adc	r31, r31
 350:	e2 55       	subi	r30, 0x52	; 82
 352:	ff 4f       	sbci	r31, 0xFF	; 255
 354:	a5 91       	lpm	r26, Z+
 356:	b4 91       	lpm	r27, Z

	uint8_t oldSREG = SREG;
 358:	9f b7       	in	r25, 0x3f	; 63
	cli();
 35a:	f8 94       	cli

	if (val == LOW) {
		*out &= ~bit;
 35c:	8c 91       	ld	r24, X
	out = portOutputRegister(port);

	uint8_t oldSREG = SREG;
	cli();

	if (val == LOW) {
 35e:	61 11       	cpse	r22, r1
 360:	03 c0       	rjmp	.+6      	; 0x368 <digitalWrite+0x5a>
		*out &= ~bit;
 362:	10 95       	com	r17
 364:	81 23       	and	r24, r17
 366:	01 c0       	rjmp	.+2      	; 0x36a <digitalWrite+0x5c>
	} else {
		*out |= bit;
 368:	81 2b       	or	r24, r17
 36a:	8c 93       	st	X, r24
	}

	SREG = oldSREG;
 36c:	9f bf       	out	0x3f, r25	; 63
}
 36e:	0f 90       	pop	r0
 370:	df 91       	pop	r29
 372:	cf 91       	pop	r28
 374:	1f 91       	pop	r17
 376:	0f 91       	pop	r16
 378:	08 95       	ret

0000037a <digitalRead>:

int digitalRead(uint8_t pin)
{
 37a:	cf 93       	push	r28
 37c:	df 93       	push	r29
	uint8_t timer = digitalPinToTimer(pin);
 37e:	28 2f       	mov	r18, r24
 380:	30 e0       	ldi	r19, 0x00	; 0
 382:	f9 01       	movw	r30, r18
 384:	e8 59       	subi	r30, 0x98	; 152
 386:	ff 4f       	sbci	r31, 0xFF	; 255
 388:	84 91       	lpm	r24, Z
	uint8_t bit = digitalPinToBitMask(pin);
 38a:	f9 01       	movw	r30, r18
 38c:	e4 58       	subi	r30, 0x84	; 132
 38e:	ff 4f       	sbci	r31, 0xFF	; 255
 390:	d4 91       	lpm	r29, Z
	uint8_t port = digitalPinToPort(pin);
 392:	f9 01       	movw	r30, r18
 394:	e0 57       	subi	r30, 0x70	; 112
 396:	ff 4f       	sbci	r31, 0xFF	; 255
 398:	c4 91       	lpm	r28, Z

	if (port == NOT_A_PIN) return LOW;
 39a:	cc 23       	and	r28, r28
 39c:	91 f0       	breq	.+36     	; 0x3c2 <digitalRead+0x48>

	// If the pin that support PWM output, we need to turn it off
	// before getting a digital reading.
	if (timer != NOT_ON_TIMER) turnOffPWM(timer);
 39e:	81 11       	cpse	r24, r1
 3a0:	0e 94 25 01 	call	0x24a	; 0x24a <turnOffPWM>

	if (*portInputRegister(port) & bit) return HIGH;
 3a4:	ec 2f       	mov	r30, r28
 3a6:	f0 e0       	ldi	r31, 0x00	; 0
 3a8:	ee 0f       	add	r30, r30
 3aa:	ff 1f       	adc	r31, r31
 3ac:	ec 55       	subi	r30, 0x5C	; 92
 3ae:	ff 4f       	sbci	r31, 0xFF	; 255
 3b0:	a5 91       	lpm	r26, Z+
 3b2:	b4 91       	lpm	r27, Z
 3b4:	2c 91       	ld	r18, X
 3b6:	2d 23       	and	r18, r29
 3b8:	81 e0       	ldi	r24, 0x01	; 1
 3ba:	90 e0       	ldi	r25, 0x00	; 0
 3bc:	21 f4       	brne	.+8      	; 0x3c6 <digitalRead+0x4c>
 3be:	80 e0       	ldi	r24, 0x00	; 0
 3c0:	02 c0       	rjmp	.+4      	; 0x3c6 <digitalRead+0x4c>
{
	uint8_t timer = digitalPinToTimer(pin);
	uint8_t bit = digitalPinToBitMask(pin);
	uint8_t port = digitalPinToPort(pin);

	if (port == NOT_A_PIN) return LOW;
 3c2:	80 e0       	ldi	r24, 0x00	; 0
 3c4:	90 e0       	ldi	r25, 0x00	; 0
	// before getting a digital reading.
	if (timer != NOT_ON_TIMER) turnOffPWM(timer);

	if (*portInputRegister(port) & bit) return HIGH;
	return LOW;
}
 3c6:	df 91       	pop	r29
 3c8:	cf 91       	pop	r28
 3ca:	08 95       	ret

000003cc <_ZN14HardwareSerial9availableEv>:
  // clear any received data
  _rx_buffer_head = _rx_buffer_tail;
}

int HardwareSerial::available(void)
{
 3cc:	fc 01       	movw	r30, r24
  return ((unsigned int)(SERIAL_RX_BUFFER_SIZE + _rx_buffer_head - _rx_buffer_tail)) % SERIAL_RX_BUFFER_SIZE;
 3ce:	81 8d       	ldd	r24, Z+25	; 0x19
 3d0:	22 8d       	ldd	r18, Z+26	; 0x1a
 3d2:	90 e0       	ldi	r25, 0x00	; 0
 3d4:	80 5c       	subi	r24, 0xC0	; 192
 3d6:	9f 4f       	sbci	r25, 0xFF	; 255
 3d8:	82 1b       	sub	r24, r18
 3da:	91 09       	sbc	r25, r1
}
 3dc:	8f 73       	andi	r24, 0x3F	; 63
 3de:	99 27       	eor	r25, r25
 3e0:	08 95       	ret

000003e2 <_ZN14HardwareSerial4peekEv>:

int HardwareSerial::peek(void)
{
 3e2:	fc 01       	movw	r30, r24
  if (_rx_buffer_head == _rx_buffer_tail) {
 3e4:	91 8d       	ldd	r25, Z+25	; 0x19
 3e6:	82 8d       	ldd	r24, Z+26	; 0x1a
 3e8:	98 17       	cp	r25, r24
 3ea:	31 f0       	breq	.+12     	; 0x3f8 <_ZN14HardwareSerial4peekEv+0x16>
    return -1;
  } else {
    return _rx_buffer[_rx_buffer_tail];
 3ec:	82 8d       	ldd	r24, Z+26	; 0x1a
 3ee:	e8 0f       	add	r30, r24
 3f0:	f1 1d       	adc	r31, r1
 3f2:	85 8d       	ldd	r24, Z+29	; 0x1d
 3f4:	90 e0       	ldi	r25, 0x00	; 0
 3f6:	08 95       	ret
}

int HardwareSerial::peek(void)
{
  if (_rx_buffer_head == _rx_buffer_tail) {
    return -1;
 3f8:	8f ef       	ldi	r24, 0xFF	; 255
 3fa:	9f ef       	ldi	r25, 0xFF	; 255
  } else {
    return _rx_buffer[_rx_buffer_tail];
  }
}
 3fc:	08 95       	ret

000003fe <_ZN14HardwareSerial4readEv>:

int HardwareSerial::read(void)
{
 3fe:	fc 01       	movw	r30, r24
  // if the head isn't ahead of the tail, we don't have any characters
  if (_rx_buffer_head == _rx_buffer_tail) {
 400:	91 8d       	ldd	r25, Z+25	; 0x19
 402:	82 8d       	ldd	r24, Z+26	; 0x1a
 404:	98 17       	cp	r25, r24
 406:	61 f0       	breq	.+24     	; 0x420 <_ZN14HardwareSerial4readEv+0x22>
    return -1;
  } else {
    unsigned char c = _rx_buffer[_rx_buffer_tail];
 408:	82 8d       	ldd	r24, Z+26	; 0x1a
 40a:	df 01       	movw	r26, r30
 40c:	a8 0f       	add	r26, r24
 40e:	b1 1d       	adc	r27, r1
 410:	5d 96       	adiw	r26, 0x1d	; 29
 412:	8c 91       	ld	r24, X
    _rx_buffer_tail = (rx_buffer_index_t)(_rx_buffer_tail + 1) % SERIAL_RX_BUFFER_SIZE;
 414:	92 8d       	ldd	r25, Z+26	; 0x1a
 416:	9f 5f       	subi	r25, 0xFF	; 255
 418:	9f 73       	andi	r25, 0x3F	; 63
 41a:	92 8f       	std	Z+26, r25	; 0x1a
    return c;
 41c:	90 e0       	ldi	r25, 0x00	; 0
 41e:	08 95       	ret

int HardwareSerial::read(void)
{
  // if the head isn't ahead of the tail, we don't have any characters
  if (_rx_buffer_head == _rx_buffer_tail) {
    return -1;
 420:	8f ef       	ldi	r24, 0xFF	; 255
 422:	9f ef       	ldi	r25, 0xFF	; 255
  } else {
    unsigned char c = _rx_buffer[_rx_buffer_tail];
    _rx_buffer_tail = (rx_buffer_index_t)(_rx_buffer_tail + 1) % SERIAL_RX_BUFFER_SIZE;
    return c;
  }
}
 424:	08 95       	ret

00000426 <_Z14serialEventRunv>:
#endif

void serialEventRun(void)
{
#if defined(HAVE_HWSERIAL0)
  if (Serial0_available && serialEvent && Serial0_available()) serialEvent();
 426:	83 e8       	ldi	r24, 0x83	; 131
 428:	93 e0       	ldi	r25, 0x03	; 3
 42a:	89 2b       	or	r24, r25
 42c:	49 f0       	breq	.+18     	; 0x440 <_Z14serialEventRunv+0x1a>
 42e:	80 e0       	ldi	r24, 0x00	; 0
 430:	90 e0       	ldi	r25, 0x00	; 0
 432:	89 2b       	or	r24, r25
 434:	29 f0       	breq	.+10     	; 0x440 <_Z14serialEventRunv+0x1a>
 436:	0e 94 83 03 	call	0x706	; 0x706 <_Z17Serial0_availablev>
 43a:	81 11       	cpse	r24, r1
 43c:	0c 94 00 00 	jmp	0	; 0x0 <__vectors>
 440:	08 95       	ret

00000442 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>:
}

// Actual interrupt handlers //////////////////////////////////////////////////////////////

void HardwareSerial::_tx_udr_empty_irq(void)
{
 442:	fc 01       	movw	r30, r24
  // If interrupts are enabled, there must be more data in the output
  // buffer. Send the next byte
  unsigned char c = _tx_buffer[_tx_buffer_tail];
 444:	84 8d       	ldd	r24, Z+28	; 0x1c
 446:	df 01       	movw	r26, r30
 448:	a8 0f       	add	r26, r24
 44a:	b1 1d       	adc	r27, r1
 44c:	a3 5a       	subi	r26, 0xA3	; 163
 44e:	bf 4f       	sbci	r27, 0xFF	; 255
 450:	2c 91       	ld	r18, X
  _tx_buffer_tail = (_tx_buffer_tail + 1) % SERIAL_TX_BUFFER_SIZE;
 452:	84 8d       	ldd	r24, Z+28	; 0x1c
 454:	90 e0       	ldi	r25, 0x00	; 0
 456:	01 96       	adiw	r24, 0x01	; 1
 458:	8f 73       	andi	r24, 0x3F	; 63
 45a:	99 27       	eor	r25, r25
 45c:	84 8f       	std	Z+28, r24	; 0x1c

  *_udr = c;
 45e:	a6 89       	ldd	r26, Z+22	; 0x16
 460:	b7 89       	ldd	r27, Z+23	; 0x17
 462:	2c 93       	st	X, r18

  // clear the TXC bit -- "can be cleared by writing a one to its bit
  // location". This makes sure flush() won't return until the bytes
  // actually got written
  sbi(*_ucsra, TXC0);
 464:	a0 89       	ldd	r26, Z+16	; 0x10
 466:	b1 89       	ldd	r27, Z+17	; 0x11
 468:	8c 91       	ld	r24, X
 46a:	80 64       	ori	r24, 0x40	; 64
 46c:	8c 93       	st	X, r24

  if (_tx_buffer_head == _tx_buffer_tail) {
 46e:	93 8d       	ldd	r25, Z+27	; 0x1b
 470:	84 8d       	ldd	r24, Z+28	; 0x1c
 472:	98 13       	cpse	r25, r24
 474:	06 c0       	rjmp	.+12     	; 0x482 <_ZN14HardwareSerial17_tx_udr_empty_irqEv+0x40>
    // Buffer empty, so disable interrupts
    cbi(*_ucsrb, UDRIE0);
 476:	02 88       	ldd	r0, Z+18	; 0x12
 478:	f3 89       	ldd	r31, Z+19	; 0x13
 47a:	e0 2d       	mov	r30, r0
 47c:	80 81       	ld	r24, Z
 47e:	8f 7d       	andi	r24, 0xDF	; 223
 480:	80 83       	st	Z, r24
 482:	08 95       	ret

00000484 <_ZN14HardwareSerial5flushEv>:
  if (head >= tail) return SERIAL_TX_BUFFER_SIZE - 1 - head + tail;
  return tail - head - 1;
}

void HardwareSerial::flush()
{
 484:	cf 93       	push	r28
 486:	df 93       	push	r29
 488:	ec 01       	movw	r28, r24
  // If we have never written a byte, no need to flush. This special
  // case is needed since there is no way to force the TXC (transmit
  // complete) bit to 1 during initialization
  if (!_written)
 48a:	88 8d       	ldd	r24, Y+24	; 0x18
 48c:	88 23       	and	r24, r24
 48e:	c9 f0       	breq	.+50     	; 0x4c2 <_ZN14HardwareSerial5flushEv+0x3e>
    return;

  while (bit_is_set(*_ucsrb, UDRIE0) || bit_is_clear(*_ucsra, TXC0)) {
 490:	ea 89       	ldd	r30, Y+18	; 0x12
 492:	fb 89       	ldd	r31, Y+19	; 0x13
 494:	80 81       	ld	r24, Z
 496:	85 fd       	sbrc	r24, 5
 498:	05 c0       	rjmp	.+10     	; 0x4a4 <_ZN14HardwareSerial5flushEv+0x20>
 49a:	a8 89       	ldd	r26, Y+16	; 0x10
 49c:	b9 89       	ldd	r27, Y+17	; 0x11
 49e:	8c 91       	ld	r24, X
 4a0:	86 fd       	sbrc	r24, 6
 4a2:	0f c0       	rjmp	.+30     	; 0x4c2 <_ZN14HardwareSerial5flushEv+0x3e>
    if (bit_is_clear(SREG, SREG_I) && bit_is_set(*_ucsrb, UDRIE0))
 4a4:	0f b6       	in	r0, 0x3f	; 63
 4a6:	07 fc       	sbrc	r0, 7
 4a8:	f5 cf       	rjmp	.-22     	; 0x494 <_ZN14HardwareSerial5flushEv+0x10>
 4aa:	80 81       	ld	r24, Z
 4ac:	85 ff       	sbrs	r24, 5
 4ae:	f2 cf       	rjmp	.-28     	; 0x494 <_ZN14HardwareSerial5flushEv+0x10>
	// Interrupts are globally disabled, but the DR empty
	// interrupt should be enabled, so poll the DR empty flag to
	// prevent deadlock
	if (bit_is_set(*_ucsra, UDRE0))
 4b0:	a8 89       	ldd	r26, Y+16	; 0x10
 4b2:	b9 89       	ldd	r27, Y+17	; 0x11
 4b4:	8c 91       	ld	r24, X
 4b6:	85 ff       	sbrs	r24, 5
 4b8:	ed cf       	rjmp	.-38     	; 0x494 <_ZN14HardwareSerial5flushEv+0x10>
	  _tx_udr_empty_irq();
 4ba:	ce 01       	movw	r24, r28
 4bc:	0e 94 21 02 	call	0x442	; 0x442 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>
 4c0:	e7 cf       	rjmp	.-50     	; 0x490 <_ZN14HardwareSerial5flushEv+0xc>
  }
  // If we get here, nothing is queued anymore (DRIE is disabled) and
  // the hardware finished tranmission (TXC is set).
}
 4c2:	df 91       	pop	r29
 4c4:	cf 91       	pop	r28
 4c6:	08 95       	ret

000004c8 <_ZN14HardwareSerial5writeEh>:

size_t HardwareSerial::write(uint8_t c)
{
 4c8:	cf 92       	push	r12
 4ca:	df 92       	push	r13
 4cc:	ff 92       	push	r15
 4ce:	0f 93       	push	r16
 4d0:	1f 93       	push	r17
 4d2:	cf 93       	push	r28
 4d4:	df 93       	push	r29
 4d6:	1f 92       	push	r1
 4d8:	cd b7       	in	r28, 0x3d	; 61
 4da:	de b7       	in	r29, 0x3e	; 62
 4dc:	6c 01       	movw	r12, r24
  _written = true;
 4de:	81 e0       	ldi	r24, 0x01	; 1
 4e0:	d6 01       	movw	r26, r12
 4e2:	58 96       	adiw	r26, 0x18	; 24
 4e4:	8c 93       	st	X, r24
 4e6:	58 97       	sbiw	r26, 0x18	; 24
  // If the buffer and the data register is empty, just write the byte
  // to the data register and be done. This shortcut helps
  // significantly improve the effective datarate at high (>
  // 500kbit/s) bitrates, where interrupt overhead becomes a slowdown.
  if (_tx_buffer_head == _tx_buffer_tail && bit_is_set(*_ucsra, UDRE0)) {
 4e8:	5b 96       	adiw	r26, 0x1b	; 27
 4ea:	9c 91       	ld	r25, X
 4ec:	5b 97       	sbiw	r26, 0x1b	; 27
 4ee:	5c 96       	adiw	r26, 0x1c	; 28
 4f0:	8c 91       	ld	r24, X
 4f2:	5c 97       	sbiw	r26, 0x1c	; 28
 4f4:	98 13       	cpse	r25, r24
 4f6:	07 c0       	rjmp	.+14     	; 0x506 <_ZN14HardwareSerial5writeEh+0x3e>
 4f8:	50 96       	adiw	r26, 0x10	; 16
 4fa:	ed 91       	ld	r30, X+
 4fc:	fc 91       	ld	r31, X
 4fe:	51 97       	sbiw	r26, 0x11	; 17
 500:	80 81       	ld	r24, Z
 502:	85 fd       	sbrc	r24, 5
 504:	2e c0       	rjmp	.+92     	; 0x562 <_ZN14HardwareSerial5writeEh+0x9a>
    *_udr = c;
    sbi(*_ucsra, TXC0);
    return 1;
  }
  tx_buffer_index_t i = (_tx_buffer_head + 1) % SERIAL_TX_BUFFER_SIZE;
 506:	f6 01       	movw	r30, r12
 508:	03 8d       	ldd	r16, Z+27	; 0x1b
 50a:	10 e0       	ldi	r17, 0x00	; 0
 50c:	0f 5f       	subi	r16, 0xFF	; 255
 50e:	1f 4f       	sbci	r17, 0xFF	; 255
 510:	0f 73       	andi	r16, 0x3F	; 63
 512:	11 27       	eor	r17, r17
 514:	f0 2e       	mov	r15, r16
	
  // If the output buffer is full, there's nothing for it other than to 
  // wait for the interrupt handler to empty it a bit
  while (i == _tx_buffer_tail) {
 516:	f6 01       	movw	r30, r12
 518:	84 8d       	ldd	r24, Z+28	; 0x1c
 51a:	f8 12       	cpse	r15, r24
 51c:	11 c0       	rjmp	.+34     	; 0x540 <_ZN14HardwareSerial5writeEh+0x78>
    if (bit_is_clear(SREG, SREG_I)) {
 51e:	0f b6       	in	r0, 0x3f	; 63
 520:	07 fc       	sbrc	r0, 7
 522:	f9 cf       	rjmp	.-14     	; 0x516 <_ZN14HardwareSerial5writeEh+0x4e>
      // Interrupts are disabled, so we'll have to poll the data
      // register empty flag ourselves. If it is set, pretend an
      // interrupt has happened and call the handler to free up
      // space for us.
      if(bit_is_set(*_ucsra, UDRE0))
 524:	d6 01       	movw	r26, r12
 526:	50 96       	adiw	r26, 0x10	; 16
 528:	ed 91       	ld	r30, X+
 52a:	fc 91       	ld	r31, X
 52c:	51 97       	sbiw	r26, 0x11	; 17
 52e:	80 81       	ld	r24, Z
 530:	85 ff       	sbrs	r24, 5
 532:	f1 cf       	rjmp	.-30     	; 0x516 <_ZN14HardwareSerial5writeEh+0x4e>
	_tx_udr_empty_irq();
 534:	c6 01       	movw	r24, r12
 536:	69 83       	std	Y+1, r22	; 0x01
 538:	0e 94 21 02 	call	0x442	; 0x442 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>
 53c:	69 81       	ldd	r22, Y+1	; 0x01
 53e:	eb cf       	rjmp	.-42     	; 0x516 <_ZN14HardwareSerial5writeEh+0x4e>
    } else {
      // nop, the interrupt handler will free up space for us
    }
  }

  _tx_buffer[_tx_buffer_head] = c;
 540:	83 8d       	ldd	r24, Z+27	; 0x1b
 542:	e8 0f       	add	r30, r24
 544:	f1 1d       	adc	r31, r1
 546:	e3 5a       	subi	r30, 0xA3	; 163
 548:	ff 4f       	sbci	r31, 0xFF	; 255
 54a:	60 83       	st	Z, r22
  _tx_buffer_head = i;
 54c:	d6 01       	movw	r26, r12
 54e:	5b 96       	adiw	r26, 0x1b	; 27
 550:	0c 93       	st	X, r16
 552:	5b 97       	sbiw	r26, 0x1b	; 27
	
  sbi(*_ucsrb, UDRIE0);
 554:	52 96       	adiw	r26, 0x12	; 18
 556:	ed 91       	ld	r30, X+
 558:	fc 91       	ld	r31, X
 55a:	53 97       	sbiw	r26, 0x13	; 19
 55c:	80 81       	ld	r24, Z
 55e:	80 62       	ori	r24, 0x20	; 32
 560:	0c c0       	rjmp	.+24     	; 0x57a <_ZN14HardwareSerial5writeEh+0xb2>
  // If the buffer and the data register is empty, just write the byte
  // to the data register and be done. This shortcut helps
  // significantly improve the effective datarate at high (>
  // 500kbit/s) bitrates, where interrupt overhead becomes a slowdown.
  if (_tx_buffer_head == _tx_buffer_tail && bit_is_set(*_ucsra, UDRE0)) {
    *_udr = c;
 562:	d6 01       	movw	r26, r12
 564:	56 96       	adiw	r26, 0x16	; 22
 566:	ed 91       	ld	r30, X+
 568:	fc 91       	ld	r31, X
 56a:	57 97       	sbiw	r26, 0x17	; 23
 56c:	60 83       	st	Z, r22
    sbi(*_ucsra, TXC0);
 56e:	50 96       	adiw	r26, 0x10	; 16
 570:	ed 91       	ld	r30, X+
 572:	fc 91       	ld	r31, X
 574:	51 97       	sbiw	r26, 0x11	; 17
 576:	80 81       	ld	r24, Z
 578:	80 64       	ori	r24, 0x40	; 64
 57a:	80 83       	st	Z, r24
  _tx_buffer_head = i;
	
  sbi(*_ucsrb, UDRIE0);
  
  return 1;
}
 57c:	81 e0       	ldi	r24, 0x01	; 1
 57e:	90 e0       	ldi	r25, 0x00	; 0
 580:	0f 90       	pop	r0
 582:	df 91       	pop	r29
 584:	cf 91       	pop	r28
 586:	1f 91       	pop	r17
 588:	0f 91       	pop	r16
 58a:	ff 90       	pop	r15
 58c:	df 90       	pop	r13
 58e:	cf 90       	pop	r12
 590:	08 95       	ret

00000592 <_ZN14HardwareSerial5beginEmh>:
}

// Public Methods //////////////////////////////////////////////////////////////

void HardwareSerial::begin(unsigned long baud, byte config)
{
 592:	bf 92       	push	r11
 594:	cf 92       	push	r12
 596:	df 92       	push	r13
 598:	ef 92       	push	r14
 59a:	ff 92       	push	r15
 59c:	cf 93       	push	r28
 59e:	df 93       	push	r29
 5a0:	ec 01       	movw	r28, r24
 5a2:	6a 01       	movw	r12, r20
 5a4:	7b 01       	movw	r14, r22
 5a6:	b2 2e       	mov	r11, r18
  // Try u2x mode first
  uint16_t baud_setting = (F_CPU / 4 / baud - 1) / 2;
  *_ucsra = 1 << U2X0;
 5a8:	e8 89       	ldd	r30, Y+16	; 0x10
 5aa:	f9 89       	ldd	r31, Y+17	; 0x11
 5ac:	82 e0       	ldi	r24, 0x02	; 2
 5ae:	80 83       	st	Z, r24
  // hardcoded exception for 57600 for compatibility with the bootloader
  // shipped with the Duemilanove and previous boards and the firmware
  // on the 8U2 on the Uno and Mega 2560. Also, The baud_setting cannot
  // be > 4095, so switch back to non-u2x mode if the baud rate is too
  // low.
  if (((F_CPU == 16000000UL) && (baud == 57600)) || (baud_setting >4095))
 5b0:	41 15       	cp	r20, r1
 5b2:	81 ee       	ldi	r24, 0xE1	; 225
 5b4:	58 07       	cpc	r21, r24
 5b6:	61 05       	cpc	r22, r1
 5b8:	71 05       	cpc	r23, r1
 5ba:	a1 f0       	breq	.+40     	; 0x5e4 <_ZN14HardwareSerial5beginEmh+0x52>
// Public Methods //////////////////////////////////////////////////////////////

void HardwareSerial::begin(unsigned long baud, byte config)
{
  // Try u2x mode first
  uint16_t baud_setting = (F_CPU / 4 / baud - 1) / 2;
 5bc:	60 e0       	ldi	r22, 0x00	; 0
 5be:	79 e0       	ldi	r23, 0x09	; 9
 5c0:	8d e3       	ldi	r24, 0x3D	; 61
 5c2:	90 e0       	ldi	r25, 0x00	; 0
 5c4:	a7 01       	movw	r20, r14
 5c6:	96 01       	movw	r18, r12
 5c8:	0e 94 1b 05 	call	0xa36	; 0xa36 <__udivmodsi4>
 5cc:	21 50       	subi	r18, 0x01	; 1
 5ce:	31 09       	sbc	r19, r1
 5d0:	41 09       	sbc	r20, r1
 5d2:	51 09       	sbc	r21, r1
 5d4:	56 95       	lsr	r21
 5d6:	47 95       	ror	r20
 5d8:	37 95       	ror	r19
 5da:	27 95       	ror	r18
  // hardcoded exception for 57600 for compatibility with the bootloader
  // shipped with the Duemilanove and previous boards and the firmware
  // on the 8U2 on the Uno and Mega 2560. Also, The baud_setting cannot
  // be > 4095, so switch back to non-u2x mode if the baud rate is too
  // low.
  if (((F_CPU == 16000000UL) && (baud == 57600)) || (baud_setting >4095))
 5dc:	21 15       	cp	r18, r1
 5de:	80 e1       	ldi	r24, 0x10	; 16
 5e0:	38 07       	cpc	r19, r24
 5e2:	98 f0       	brcs	.+38     	; 0x60a <_ZN14HardwareSerial5beginEmh+0x78>
  {
    *_ucsra = 0;
 5e4:	e8 89       	ldd	r30, Y+16	; 0x10
 5e6:	f9 89       	ldd	r31, Y+17	; 0x11
 5e8:	10 82       	st	Z, r1
    baud_setting = (F_CPU / 8 / baud - 1) / 2;
 5ea:	60 e8       	ldi	r22, 0x80	; 128
 5ec:	74 e8       	ldi	r23, 0x84	; 132
 5ee:	8e e1       	ldi	r24, 0x1E	; 30
 5f0:	90 e0       	ldi	r25, 0x00	; 0
 5f2:	a7 01       	movw	r20, r14
 5f4:	96 01       	movw	r18, r12
 5f6:	0e 94 1b 05 	call	0xa36	; 0xa36 <__udivmodsi4>
 5fa:	21 50       	subi	r18, 0x01	; 1
 5fc:	31 09       	sbc	r19, r1
 5fe:	41 09       	sbc	r20, r1
 600:	51 09       	sbc	r21, r1
 602:	56 95       	lsr	r21
 604:	47 95       	ror	r20
 606:	37 95       	ror	r19
 608:	27 95       	ror	r18
  }

  // assign the baud_setting, a.k.a. ubrr (USART Baud Rate Register)
  *_ubrrh = baud_setting >> 8;
 60a:	ec 85       	ldd	r30, Y+12	; 0x0c
 60c:	fd 85       	ldd	r31, Y+13	; 0x0d
 60e:	30 83       	st	Z, r19
  *_ubrrl = baud_setting;
 610:	ee 85       	ldd	r30, Y+14	; 0x0e
 612:	ff 85       	ldd	r31, Y+15	; 0x0f
 614:	20 83       	st	Z, r18

  _written = false;
 616:	18 8e       	std	Y+24, r1	; 0x18

  //set the data bits, parity, and stop bits
#if defined(__AVR_ATmega8__)
  config |= 0x80; // select UCSRC register (shared with UBRRH)
#endif
  *_ucsrc = config;
 618:	ec 89       	ldd	r30, Y+20	; 0x14
 61a:	fd 89       	ldd	r31, Y+21	; 0x15
 61c:	b0 82       	st	Z, r11
  
  sbi(*_ucsrb, RXEN0);
 61e:	ea 89       	ldd	r30, Y+18	; 0x12
 620:	fb 89       	ldd	r31, Y+19	; 0x13
 622:	80 81       	ld	r24, Z
 624:	80 61       	ori	r24, 0x10	; 16
 626:	80 83       	st	Z, r24
  sbi(*_ucsrb, TXEN0);
 628:	ea 89       	ldd	r30, Y+18	; 0x12
 62a:	fb 89       	ldd	r31, Y+19	; 0x13
 62c:	80 81       	ld	r24, Z
 62e:	88 60       	ori	r24, 0x08	; 8
 630:	80 83       	st	Z, r24
  sbi(*_ucsrb, RXCIE0);
 632:	ea 89       	ldd	r30, Y+18	; 0x12
 634:	fb 89       	ldd	r31, Y+19	; 0x13
 636:	80 81       	ld	r24, Z
 638:	80 68       	ori	r24, 0x80	; 128
 63a:	80 83       	st	Z, r24
  cbi(*_ucsrb, UDRIE0);
 63c:	ea 89       	ldd	r30, Y+18	; 0x12
 63e:	fb 89       	ldd	r31, Y+19	; 0x13
 640:	80 81       	ld	r24, Z
 642:	8f 7d       	andi	r24, 0xDF	; 223
 644:	80 83       	st	Z, r24
}
 646:	df 91       	pop	r29
 648:	cf 91       	pop	r28
 64a:	ff 90       	pop	r15
 64c:	ef 90       	pop	r14
 64e:	df 90       	pop	r13
 650:	cf 90       	pop	r12
 652:	bf 90       	pop	r11
 654:	08 95       	ret

00000656 <__vector_18>:
#elif defined(USART_RXC_vect)
  ISR(USART_RXC_vect) // ATmega8
#else
  #error "Don't know what the Data Received vector is called for Serial"
#endif
  {
 656:	1f 92       	push	r1
 658:	0f 92       	push	r0
 65a:	0f b6       	in	r0, 0x3f	; 63
 65c:	0f 92       	push	r0
 65e:	11 24       	eor	r1, r1
 660:	2f 93       	push	r18
 662:	8f 93       	push	r24
 664:	9f 93       	push	r25
 666:	ef 93       	push	r30
 668:	ff 93       	push	r31

// Actual interrupt handlers //////////////////////////////////////////////////////////////

void HardwareSerial::_rx_complete_irq(void)
{
  if (bit_is_clear(*_ucsra, UPE0)) {
 66a:	e0 91 02 02 	lds	r30, 0x0202
 66e:	f0 91 03 02 	lds	r31, 0x0203
 672:	80 81       	ld	r24, Z
 674:	e0 91 08 02 	lds	r30, 0x0208
 678:	f0 91 09 02 	lds	r31, 0x0209
 67c:	82 fd       	sbrc	r24, 2
 67e:	12 c0       	rjmp	.+36     	; 0x6a4 <__vector_18+0x4e>
    // No Parity error, read byte and store it in the buffer if there is
    // room
    unsigned char c = *_udr;
 680:	90 81       	ld	r25, Z
    rx_buffer_index_t i = (unsigned int)(_rx_buffer_head + 1) % SERIAL_RX_BUFFER_SIZE;
 682:	80 91 0b 02 	lds	r24, 0x020B
 686:	8f 5f       	subi	r24, 0xFF	; 255
 688:	8f 73       	andi	r24, 0x3F	; 63

    // if we should be storing the received character into the location
    // just before the tail (meaning that the head would advance to the
    // current location of the tail), we're about to overflow the buffer
    // and so we don't write the character or advance the head.
    if (i != _rx_buffer_tail) {
 68a:	20 91 0c 02 	lds	r18, 0x020C
 68e:	82 17       	cp	r24, r18
 690:	51 f0       	breq	.+20     	; 0x6a6 <__vector_18+0x50>
      _rx_buffer[_rx_buffer_head] = c;
 692:	e0 91 0b 02 	lds	r30, 0x020B
 696:	f0 e0       	ldi	r31, 0x00	; 0
 698:	ee 50       	subi	r30, 0x0E	; 14
 69a:	fe 4f       	sbci	r31, 0xFE	; 254
 69c:	95 8f       	std	Z+29, r25	; 0x1d
      _rx_buffer_head = i;
 69e:	80 93 0b 02 	sts	0x020B, r24
 6a2:	01 c0       	rjmp	.+2      	; 0x6a6 <__vector_18+0x50>
    }
  } else {
    // Parity error, read byte but discard it
    *_udr;
 6a4:	80 81       	ld	r24, Z
    Serial._rx_complete_irq();
  }
 6a6:	ff 91       	pop	r31
 6a8:	ef 91       	pop	r30
 6aa:	9f 91       	pop	r25
 6ac:	8f 91       	pop	r24
 6ae:	2f 91       	pop	r18
 6b0:	0f 90       	pop	r0
 6b2:	0f be       	out	0x3f, r0	; 63
 6b4:	0f 90       	pop	r0
 6b6:	1f 90       	pop	r1
 6b8:	18 95       	reti

000006ba <__vector_19>:
#elif defined(USART_UDRE_vect)
ISR(USART_UDRE_vect)
#else
  #error "Don't know what the Data Register Empty vector is called for Serial"
#endif
{
 6ba:	1f 92       	push	r1
 6bc:	0f 92       	push	r0
 6be:	0f b6       	in	r0, 0x3f	; 63
 6c0:	0f 92       	push	r0
 6c2:	11 24       	eor	r1, r1
 6c4:	2f 93       	push	r18
 6c6:	3f 93       	push	r19
 6c8:	4f 93       	push	r20
 6ca:	5f 93       	push	r21
 6cc:	6f 93       	push	r22
 6ce:	7f 93       	push	r23
 6d0:	8f 93       	push	r24
 6d2:	9f 93       	push	r25
 6d4:	af 93       	push	r26
 6d6:	bf 93       	push	r27
 6d8:	ef 93       	push	r30
 6da:	ff 93       	push	r31
  Serial._tx_udr_empty_irq();
 6dc:	82 ef       	ldi	r24, 0xF2	; 242
 6de:	91 e0       	ldi	r25, 0x01	; 1
 6e0:	0e 94 21 02 	call	0x442	; 0x442 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>
}
 6e4:	ff 91       	pop	r31
 6e6:	ef 91       	pop	r30
 6e8:	bf 91       	pop	r27
 6ea:	af 91       	pop	r26
 6ec:	9f 91       	pop	r25
 6ee:	8f 91       	pop	r24
 6f0:	7f 91       	pop	r23
 6f2:	6f 91       	pop	r22
 6f4:	5f 91       	pop	r21
 6f6:	4f 91       	pop	r20
 6f8:	3f 91       	pop	r19
 6fa:	2f 91       	pop	r18
 6fc:	0f 90       	pop	r0
 6fe:	0f be       	out	0x3f, r0	; 63
 700:	0f 90       	pop	r0
 702:	1f 90       	pop	r1
 704:	18 95       	reti

00000706 <_Z17Serial0_availablev>:
#endif

// Function that can be weakly referenced by serialEventRun to prevent
// pulling in this file if it's not otherwise used.
bool Serial0_available() {
  return Serial.available();
 706:	82 ef       	ldi	r24, 0xF2	; 242
 708:	91 e0       	ldi	r25, 0x01	; 1
 70a:	0e 94 e6 01 	call	0x3cc	; 0x3cc <_ZN14HardwareSerial9availableEv>
 70e:	21 e0       	ldi	r18, 0x01	; 1
 710:	89 2b       	or	r24, r25
 712:	09 f4       	brne	.+2      	; 0x716 <_Z17Serial0_availablev+0x10>
 714:	20 e0       	ldi	r18, 0x00	; 0
}
 716:	82 2f       	mov	r24, r18
 718:	08 95       	ret

0000071a <_GLOBAL__sub_I___vector_18>:
    size_t printNumber(unsigned long, uint8_t);
    size_t printFloat(double, uint8_t);
  protected:
    void setWriteError(int err = 1) { write_error = err; }
  public:
    Print() : write_error(0) {}
 71a:	10 92 f5 01 	sts	0x01F5, r1
 71e:	10 92 f4 01 	sts	0x01F4, r1
    virtual int available() = 0;
    virtual int read() = 0;
    virtual int peek() = 0;
    virtual void flush() = 0;

    Stream() {_timeout=1000;}
 722:	88 ee       	ldi	r24, 0xE8	; 232
 724:	93 e0       	ldi	r25, 0x03	; 3
 726:	a0 e0       	ldi	r26, 0x00	; 0
 728:	b0 e0       	ldi	r27, 0x00	; 0
 72a:	80 93 f6 01 	sts	0x01F6, r24
 72e:	90 93 f7 01 	sts	0x01F7, r25
 732:	a0 93 f8 01 	sts	0x01F8, r26
 736:	b0 93 f9 01 	sts	0x01F9, r27
  volatile uint8_t *ucsrc, volatile uint8_t *udr) :
    _ubrrh(ubrrh), _ubrrl(ubrrl),
    _ucsra(ucsra), _ucsrb(ucsrb), _ucsrc(ucsrc),
    _udr(udr),
    _rx_buffer_head(0), _rx_buffer_tail(0),
    _tx_buffer_head(0), _tx_buffer_tail(0)
 73a:	8a e0       	ldi	r24, 0x0A	; 10
 73c:	91 e0       	ldi	r25, 0x01	; 1
 73e:	90 93 f3 01 	sts	0x01F3, r25
 742:	80 93 f2 01 	sts	0x01F2, r24
 746:	85 ec       	ldi	r24, 0xC5	; 197
 748:	90 e0       	ldi	r25, 0x00	; 0
 74a:	90 93 ff 01 	sts	0x01FF, r25
 74e:	80 93 fe 01 	sts	0x01FE, r24
 752:	84 ec       	ldi	r24, 0xC4	; 196
 754:	90 e0       	ldi	r25, 0x00	; 0
 756:	90 93 01 02 	sts	0x0201, r25
 75a:	80 93 00 02 	sts	0x0200, r24
 75e:	80 ec       	ldi	r24, 0xC0	; 192
 760:	90 e0       	ldi	r25, 0x00	; 0
 762:	90 93 03 02 	sts	0x0203, r25
 766:	80 93 02 02 	sts	0x0202, r24
 76a:	81 ec       	ldi	r24, 0xC1	; 193
 76c:	90 e0       	ldi	r25, 0x00	; 0
 76e:	90 93 05 02 	sts	0x0205, r25
 772:	80 93 04 02 	sts	0x0204, r24
 776:	82 ec       	ldi	r24, 0xC2	; 194
 778:	90 e0       	ldi	r25, 0x00	; 0
 77a:	90 93 07 02 	sts	0x0207, r25
 77e:	80 93 06 02 	sts	0x0206, r24
 782:	86 ec       	ldi	r24, 0xC6	; 198
 784:	90 e0       	ldi	r25, 0x00	; 0
 786:	90 93 09 02 	sts	0x0209, r25
 78a:	80 93 08 02 	sts	0x0208, r24
 78e:	10 92 0b 02 	sts	0x020B, r1
 792:	10 92 0c 02 	sts	0x020C, r1
 796:	10 92 0d 02 	sts	0x020D, r1
 79a:	10 92 0e 02 	sts	0x020E, r1
 79e:	08 95       	ret

000007a0 <_ZN5Print5writeEPKhj>:

// Public Methods //////////////////////////////////////////////////////////////

/* default implementation: may be overridden */
size_t Print::write(const uint8_t *buffer, size_t size)
{
 7a0:	cf 92       	push	r12
 7a2:	df 92       	push	r13
 7a4:	ef 92       	push	r14
 7a6:	ff 92       	push	r15
 7a8:	0f 93       	push	r16
 7aa:	1f 93       	push	r17
 7ac:	cf 93       	push	r28
 7ae:	df 93       	push	r29
 7b0:	7c 01       	movw	r14, r24
 7b2:	6a 01       	movw	r12, r20
 7b4:	eb 01       	movw	r28, r22
  size_t n = 0;
 7b6:	00 e0       	ldi	r16, 0x00	; 0
 7b8:	10 e0       	ldi	r17, 0x00	; 0
  while (size--) {
 7ba:	0c 15       	cp	r16, r12
 7bc:	1d 05       	cpc	r17, r13
 7be:	71 f0       	breq	.+28     	; 0x7dc <_ZN5Print5writeEPKhj+0x3c>
    if (write(*buffer++)) n++;
 7c0:	69 91       	ld	r22, Y+
 7c2:	d7 01       	movw	r26, r14
 7c4:	ed 91       	ld	r30, X+
 7c6:	fc 91       	ld	r31, X
 7c8:	01 90       	ld	r0, Z+
 7ca:	f0 81       	ld	r31, Z
 7cc:	e0 2d       	mov	r30, r0
 7ce:	c7 01       	movw	r24, r14
 7d0:	09 95       	icall
 7d2:	89 2b       	or	r24, r25
 7d4:	19 f0       	breq	.+6      	; 0x7dc <_ZN5Print5writeEPKhj+0x3c>
 7d6:	0f 5f       	subi	r16, 0xFF	; 255
 7d8:	1f 4f       	sbci	r17, 0xFF	; 255
 7da:	ef cf       	rjmp	.-34     	; 0x7ba <_ZN5Print5writeEPKhj+0x1a>
    else break;
  }
  return n;
}
 7dc:	c8 01       	movw	r24, r16
 7de:	df 91       	pop	r29
 7e0:	cf 91       	pop	r28
 7e2:	1f 91       	pop	r17
 7e4:	0f 91       	pop	r16
 7e6:	ff 90       	pop	r15
 7e8:	ef 90       	pop	r14
 7ea:	df 90       	pop	r13
 7ec:	cf 90       	pop	r12
 7ee:	08 95       	ret

000007f0 <_ZN5Print5writeEPKc>:
    int getWriteError() { return write_error; }
    void clearWriteError() { setWriteError(0); }
  
    virtual size_t write(uint8_t) = 0;
    size_t write(const char *str) {
      if (str == NULL) return 0;
 7f0:	61 15       	cp	r22, r1
 7f2:	71 05       	cpc	r23, r1
 7f4:	81 f0       	breq	.+32     	; 0x816 <_ZN5Print5writeEPKc+0x26>
      return write((const uint8_t *)str, strlen(str));
 7f6:	db 01       	movw	r26, r22
 7f8:	0d 90       	ld	r0, X+
 7fa:	00 20       	and	r0, r0
 7fc:	e9 f7       	brne	.-6      	; 0x7f8 <_ZN5Print5writeEPKc+0x8>
 7fe:	ad 01       	movw	r20, r26
 800:	41 50       	subi	r20, 0x01	; 1
 802:	51 09       	sbc	r21, r1
 804:	46 1b       	sub	r20, r22
 806:	57 0b       	sbc	r21, r23
 808:	dc 01       	movw	r26, r24
 80a:	ed 91       	ld	r30, X+
 80c:	fc 91       	ld	r31, X
 80e:	02 80       	ldd	r0, Z+2	; 0x02
 810:	f3 81       	ldd	r31, Z+3	; 0x03
 812:	e0 2d       	mov	r30, r0
 814:	09 94       	ijmp
    }
 816:	80 e0       	ldi	r24, 0x00	; 0
 818:	90 e0       	ldi	r25, 0x00	; 0
 81a:	08 95       	ret

0000081c <_ZN5Print5printEc>:
  return write(str);
}

size_t Print::print(char c)
{
  return write(c);
 81c:	dc 01       	movw	r26, r24
 81e:	ed 91       	ld	r30, X+
 820:	fc 91       	ld	r31, X
 822:	01 90       	ld	r0, Z+
 824:	f0 81       	ld	r31, Z
 826:	e0 2d       	mov	r30, r0
 828:	09 94       	ijmp

0000082a <_ZN5Print7printlnEv>:
  return x.printTo(*this);
}

size_t Print::println(void)
{
  return write("\r\n");
 82a:	66 e1       	ldi	r22, 0x16	; 22
 82c:	71 e0       	ldi	r23, 0x01	; 1
 82e:	0c 94 f8 03 	jmp	0x7f0	; 0x7f0 <_ZN5Print5writeEPKc>

00000832 <_ZN5Print11printNumberEmh>:
  return n;
}

// Private Methods /////////////////////////////////////////////////////////////

size_t Print::printNumber(unsigned long n, uint8_t base) {
 832:	8f 92       	push	r8
 834:	9f 92       	push	r9
 836:	af 92       	push	r10
 838:	bf 92       	push	r11
 83a:	cf 92       	push	r12
 83c:	df 92       	push	r13
 83e:	ef 92       	push	r14
 840:	ff 92       	push	r15
 842:	0f 93       	push	r16
 844:	1f 93       	push	r17
 846:	cf 93       	push	r28
 848:	df 93       	push	r29
 84a:	cd b7       	in	r28, 0x3d	; 61
 84c:	de b7       	in	r29, 0x3e	; 62
 84e:	a1 97       	sbiw	r28, 0x21	; 33
 850:	0f b6       	in	r0, 0x3f	; 63
 852:	f8 94       	cli
 854:	de bf       	out	0x3e, r29	; 62
 856:	0f be       	out	0x3f, r0	; 63
 858:	cd bf       	out	0x3d, r28	; 61
 85a:	7c 01       	movw	r14, r24
 85c:	c4 2e       	mov	r12, r20
 85e:	e5 2f       	mov	r30, r21
 860:	cb 01       	movw	r24, r22
 862:	d2 2e       	mov	r13, r18
  char buf[8 * sizeof(long) + 1]; // Assumes 8-bit chars plus zero byte.
  char *str = &buf[sizeof(buf) - 1];

  *str = '\0';
 864:	19 a2       	std	Y+33, r1	; 0x21

  // prevent crash if called with base == 1
  if (base < 2) base = 10;
 866:	21 e0       	ldi	r18, 0x01	; 1
 868:	2d 15       	cp	r18, r13
 86a:	10 f0       	brcs	.+4      	; 0x870 <_ZN5Print11printNumberEmh+0x3e>
 86c:	2a e0       	ldi	r18, 0x0A	; 10
 86e:	d2 2e       	mov	r13, r18
 870:	8e 01       	movw	r16, r28
 872:	0f 5d       	subi	r16, 0xDF	; 223
 874:	1f 4f       	sbci	r17, 0xFF	; 255

  do {
    unsigned long m = n;
    n /= base;
 876:	8d 2c       	mov	r8, r13
 878:	91 2c       	mov	r9, r1
 87a:	a1 2c       	mov	r10, r1
 87c:	b1 2c       	mov	r11, r1
 87e:	6c 2d       	mov	r22, r12
 880:	7e 2f       	mov	r23, r30
 882:	a5 01       	movw	r20, r10
 884:	94 01       	movw	r18, r8
 886:	0e 94 1b 05 	call	0xa36	; 0xa36 <__udivmodsi4>
    char c = m - base * n;
 88a:	8c 2d       	mov	r24, r12
 88c:	d2 9e       	mul	r13, r18
 88e:	80 19       	sub	r24, r0
 890:	11 24       	eor	r1, r1
    *--str = c < 10 ? c + '0' : c + 'A' - 10;
 892:	01 50       	subi	r16, 0x01	; 1
 894:	11 09       	sbc	r17, r1
 896:	8a 30       	cpi	r24, 0x0A	; 10
 898:	14 f4       	brge	.+4      	; 0x89e <_ZN5Print11printNumberEmh+0x6c>
 89a:	80 5d       	subi	r24, 0xD0	; 208
 89c:	01 c0       	rjmp	.+2      	; 0x8a0 <_ZN5Print11printNumberEmh+0x6e>
 89e:	89 5c       	subi	r24, 0xC9	; 201
 8a0:	f8 01       	movw	r30, r16
 8a2:	80 83       	st	Z, r24
  *str = '\0';

  // prevent crash if called with base == 1
  if (base < 2) base = 10;

  do {
 8a4:	21 15       	cp	r18, r1
 8a6:	31 05       	cpc	r19, r1
 8a8:	41 05       	cpc	r20, r1
 8aa:	51 05       	cpc	r21, r1
 8ac:	21 f0       	breq	.+8      	; 0x8b6 <_ZN5Print11printNumberEmh+0x84>
    unsigned long m = n;
    n /= base;
 8ae:	c2 2e       	mov	r12, r18
 8b0:	e3 2f       	mov	r30, r19
 8b2:	ca 01       	movw	r24, r20
 8b4:	e4 cf       	rjmp	.-56     	; 0x87e <_ZN5Print11printNumberEmh+0x4c>
    char c = m - base * n;
    *--str = c < 10 ? c + '0' : c + 'A' - 10;
  } while(n);

  return write(str);
 8b6:	b8 01       	movw	r22, r16
 8b8:	c7 01       	movw	r24, r14
 8ba:	0e 94 f8 03 	call	0x7f0	; 0x7f0 <_ZN5Print5writeEPKc>
}
 8be:	a1 96       	adiw	r28, 0x21	; 33
 8c0:	0f b6       	in	r0, 0x3f	; 63
 8c2:	f8 94       	cli
 8c4:	de bf       	out	0x3e, r29	; 62
 8c6:	0f be       	out	0x3f, r0	; 63
 8c8:	cd bf       	out	0x3d, r28	; 61
 8ca:	df 91       	pop	r29
 8cc:	cf 91       	pop	r28
 8ce:	1f 91       	pop	r17
 8d0:	0f 91       	pop	r16
 8d2:	ff 90       	pop	r15
 8d4:	ef 90       	pop	r14
 8d6:	df 90       	pop	r13
 8d8:	cf 90       	pop	r12
 8da:	bf 90       	pop	r11
 8dc:	af 90       	pop	r10
 8de:	9f 90       	pop	r9
 8e0:	8f 90       	pop	r8
 8e2:	08 95       	ret

000008e4 <_ZN5Print5printEmi>:
  }
}

size_t Print::print(unsigned long n, int base)
{
  if (base == 0) return write(n);
 8e4:	21 15       	cp	r18, r1
 8e6:	31 05       	cpc	r19, r1
 8e8:	41 f4       	brne	.+16     	; 0x8fa <_ZN5Print5printEmi+0x16>
 8ea:	dc 01       	movw	r26, r24
 8ec:	ed 91       	ld	r30, X+
 8ee:	fc 91       	ld	r31, X
 8f0:	01 90       	ld	r0, Z+
 8f2:	f0 81       	ld	r31, Z
 8f4:	e0 2d       	mov	r30, r0
 8f6:	64 2f       	mov	r22, r20
 8f8:	09 94       	ijmp
  else return printNumber(n, base);
 8fa:	0c 94 19 04 	jmp	0x832	; 0x832 <_ZN5Print11printNumberEmh>

000008fe <_ZN5Print5printEhi>:
{
  return write(c);
}

size_t Print::print(unsigned char b, int base)
{
 8fe:	9a 01       	movw	r18, r20
  return print((unsigned long) b, base);
 900:	46 2f       	mov	r20, r22
 902:	50 e0       	ldi	r21, 0x00	; 0
 904:	60 e0       	ldi	r22, 0x00	; 0
 906:	70 e0       	ldi	r23, 0x00	; 0
 908:	0c 94 72 04 	jmp	0x8e4	; 0x8e4 <_ZN5Print5printEmi>

0000090c <initVariant>:
int atexit(void (* /*func*/ )()) { return 0; }

// Weak empty variant initialization function.
// May be redefined by variant files.
void initVariant() __attribute__((weak));
void initVariant() { }
 90c:	08 95       	ret

0000090e <main>:
void setupUSB() __attribute__((weak));
void setupUSB() { }

int main(void)
{
	init();
 90e:	0e 94 e0 04 	call	0x9c0	; 0x9c0 <init>

	initVariant();
 912:	0e 94 86 04 	call	0x90c	; 0x90c <initVariant>

#if defined(USBCON)
	USBDevice.attach();
#endif
	
	setup();
 916:	0e 94 8c 00 	call	0x118	; 0x118 <setup>
    
	for (;;) {
		loop();
		if (serialEventRun) serialEventRun();
 91a:	c3 e1       	ldi	r28, 0x13	; 19
 91c:	d2 e0       	ldi	r29, 0x02	; 2
#endif
	
	setup();
    
	for (;;) {
		loop();
 91e:	0e 94 fe 00 	call	0x1fc	; 0x1fc <loop>
		if (serialEventRun) serialEventRun();
 922:	20 97       	sbiw	r28, 0x00	; 0
 924:	e1 f3       	breq	.-8      	; 0x91e <main+0x10>
 926:	0e 94 13 02 	call	0x426	; 0x426 <_Z14serialEventRunv>
 92a:	f9 cf       	rjmp	.-14     	; 0x91e <main+0x10>

0000092c <__vector_16>:
#if defined(__AVR_ATtiny24__) || defined(__AVR_ATtiny44__) || defined(__AVR_ATtiny84__)
ISR(TIM0_OVF_vect)
#else
ISR(TIMER0_OVF_vect)
#endif
{
 92c:	1f 92       	push	r1
 92e:	0f 92       	push	r0
 930:	0f b6       	in	r0, 0x3f	; 63
 932:	0f 92       	push	r0
 934:	11 24       	eor	r1, r1
 936:	2f 93       	push	r18
 938:	3f 93       	push	r19
 93a:	8f 93       	push	r24
 93c:	9f 93       	push	r25
 93e:	af 93       	push	r26
 940:	bf 93       	push	r27
	// copy these to local variables so they can be stored in registers
	// (volatile variables must be read from memory on every access)
	unsigned long m = timer0_millis;
 942:	80 91 90 02 	lds	r24, 0x0290
 946:	90 91 91 02 	lds	r25, 0x0291
 94a:	a0 91 92 02 	lds	r26, 0x0292
 94e:	b0 91 93 02 	lds	r27, 0x0293
	unsigned char f = timer0_fract;
 952:	30 91 8f 02 	lds	r19, 0x028F

	m += MILLIS_INC;
	f += FRACT_INC;
 956:	23 e0       	ldi	r18, 0x03	; 3
 958:	23 0f       	add	r18, r19
	if (f >= FRACT_MAX) {
 95a:	2d 37       	cpi	r18, 0x7D	; 125
 95c:	20 f4       	brcc	.+8      	; 0x966 <__vector_16+0x3a>
	// copy these to local variables so they can be stored in registers
	// (volatile variables must be read from memory on every access)
	unsigned long m = timer0_millis;
	unsigned char f = timer0_fract;

	m += MILLIS_INC;
 95e:	01 96       	adiw	r24, 0x01	; 1
 960:	a1 1d       	adc	r26, r1
 962:	b1 1d       	adc	r27, r1
 964:	05 c0       	rjmp	.+10     	; 0x970 <__vector_16+0x44>
	f += FRACT_INC;
	if (f >= FRACT_MAX) {
		f -= FRACT_MAX;
 966:	26 e8       	ldi	r18, 0x86	; 134
 968:	23 0f       	add	r18, r19
		m += 1;
 96a:	02 96       	adiw	r24, 0x02	; 2
 96c:	a1 1d       	adc	r26, r1
 96e:	b1 1d       	adc	r27, r1
	}

	timer0_fract = f;
 970:	20 93 8f 02 	sts	0x028F, r18
	timer0_millis = m;
 974:	80 93 90 02 	sts	0x0290, r24
 978:	90 93 91 02 	sts	0x0291, r25
 97c:	a0 93 92 02 	sts	0x0292, r26
 980:	b0 93 93 02 	sts	0x0293, r27
	timer0_overflow_count++;
 984:	80 91 94 02 	lds	r24, 0x0294
 988:	90 91 95 02 	lds	r25, 0x0295
 98c:	a0 91 96 02 	lds	r26, 0x0296
 990:	b0 91 97 02 	lds	r27, 0x0297
 994:	01 96       	adiw	r24, 0x01	; 1
 996:	a1 1d       	adc	r26, r1
 998:	b1 1d       	adc	r27, r1
 99a:	80 93 94 02 	sts	0x0294, r24
 99e:	90 93 95 02 	sts	0x0295, r25
 9a2:	a0 93 96 02 	sts	0x0296, r26
 9a6:	b0 93 97 02 	sts	0x0297, r27
}
 9aa:	bf 91       	pop	r27
 9ac:	af 91       	pop	r26
 9ae:	9f 91       	pop	r25
 9b0:	8f 91       	pop	r24
 9b2:	3f 91       	pop	r19
 9b4:	2f 91       	pop	r18
 9b6:	0f 90       	pop	r0
 9b8:	0f be       	out	0x3f, r0	; 63
 9ba:	0f 90       	pop	r0
 9bc:	1f 90       	pop	r1
 9be:	18 95       	reti

000009c0 <init>:

void init()
{
	// this needs to be called before setup() or some functions won't
	// work there
	sei();
 9c0:	78 94       	sei
	
	// on the ATmega168, timer 0 is also used for fast hardware pwm
	// (using phase-correct PWM would mean that timer 0 overflowed half as often
	// resulting in different millis() behavior on the ATmega8 and ATmega168)
#if defined(TCCR0A) && defined(WGM01)
	sbi(TCCR0A, WGM01);
 9c2:	84 b5       	in	r24, 0x24	; 36
 9c4:	82 60       	ori	r24, 0x02	; 2
 9c6:	84 bd       	out	0x24, r24	; 36
	sbi(TCCR0A, WGM00);
 9c8:	84 b5       	in	r24, 0x24	; 36
 9ca:	81 60       	ori	r24, 0x01	; 1
 9cc:	84 bd       	out	0x24, r24	; 36
	// this combination is for the standard atmega8
	sbi(TCCR0, CS01);
	sbi(TCCR0, CS00);
#elif defined(TCCR0B) && defined(CS01) && defined(CS00)
	// this combination is for the standard 168/328/1280/2560
	sbi(TCCR0B, CS01);
 9ce:	85 b5       	in	r24, 0x25	; 37
 9d0:	82 60       	ori	r24, 0x02	; 2
 9d2:	85 bd       	out	0x25, r24	; 37
	sbi(TCCR0B, CS00);
 9d4:	85 b5       	in	r24, 0x25	; 37
 9d6:	81 60       	ori	r24, 0x01	; 1
 9d8:	85 bd       	out	0x25, r24	; 37

	// enable timer 0 overflow interrupt
#if defined(TIMSK) && defined(TOIE0)
	sbi(TIMSK, TOIE0);
#elif defined(TIMSK0) && defined(TOIE0)
	sbi(TIMSK0, TOIE0);
 9da:	ee e6       	ldi	r30, 0x6E	; 110
 9dc:	f0 e0       	ldi	r31, 0x00	; 0
 9de:	80 81       	ld	r24, Z
 9e0:	81 60       	ori	r24, 0x01	; 1
 9e2:	80 83       	st	Z, r24
	// this is better for motors as it ensures an even waveform
	// note, however, that fast pwm mode can achieve a frequency of up
	// 8 MHz (with a 16 MHz clock) at 50% duty cycle

#if defined(TCCR1B) && defined(CS11) && defined(CS10)
	TCCR1B = 0;
 9e4:	e1 e8       	ldi	r30, 0x81	; 129
 9e6:	f0 e0       	ldi	r31, 0x00	; 0
 9e8:	10 82       	st	Z, r1

	// set timer 1 prescale factor to 64
	sbi(TCCR1B, CS11);
 9ea:	80 81       	ld	r24, Z
 9ec:	82 60       	ori	r24, 0x02	; 2
 9ee:	80 83       	st	Z, r24
#if F_CPU >= 8000000L
	sbi(TCCR1B, CS10);
 9f0:	80 81       	ld	r24, Z
 9f2:	81 60       	ori	r24, 0x01	; 1
 9f4:	80 83       	st	Z, r24
	sbi(TCCR1, CS10);
#endif
#endif
	// put timer 1 in 8-bit phase correct pwm mode
#if defined(TCCR1A) && defined(WGM10)
	sbi(TCCR1A, WGM10);
 9f6:	e0 e8       	ldi	r30, 0x80	; 128
 9f8:	f0 e0       	ldi	r31, 0x00	; 0
 9fa:	80 81       	ld	r24, Z
 9fc:	81 60       	ori	r24, 0x01	; 1
 9fe:	80 83       	st	Z, r24

	// set timer 2 prescale factor to 64
#if defined(TCCR2) && defined(CS22)
	sbi(TCCR2, CS22);
#elif defined(TCCR2B) && defined(CS22)
	sbi(TCCR2B, CS22);
 a00:	e1 eb       	ldi	r30, 0xB1	; 177
 a02:	f0 e0       	ldi	r31, 0x00	; 0
 a04:	80 81       	ld	r24, Z
 a06:	84 60       	ori	r24, 0x04	; 4
 a08:	80 83       	st	Z, r24

	// configure timer 2 for phase correct pwm (8-bit)
#if defined(TCCR2) && defined(WGM20)
	sbi(TCCR2, WGM20);
#elif defined(TCCR2A) && defined(WGM20)
	sbi(TCCR2A, WGM20);
 a0a:	e0 eb       	ldi	r30, 0xB0	; 176
 a0c:	f0 e0       	ldi	r31, 0x00	; 0
 a0e:	80 81       	ld	r24, Z
 a10:	81 60       	ori	r24, 0x01	; 1
 a12:	80 83       	st	Z, r24
#endif

#if defined(ADCSRA)
	// set a2d prescaler so we are inside the desired 50-200 KHz range.
	#if F_CPU >= 16000000 // 16 MHz / 128 = 125 KHz
		sbi(ADCSRA, ADPS2);
 a14:	ea e7       	ldi	r30, 0x7A	; 122
 a16:	f0 e0       	ldi	r31, 0x00	; 0
 a18:	80 81       	ld	r24, Z
 a1a:	84 60       	ori	r24, 0x04	; 4
 a1c:	80 83       	st	Z, r24
		sbi(ADCSRA, ADPS1);
 a1e:	80 81       	ld	r24, Z
 a20:	82 60       	ori	r24, 0x02	; 2
 a22:	80 83       	st	Z, r24
		sbi(ADCSRA, ADPS0);
 a24:	80 81       	ld	r24, Z
 a26:	81 60       	ori	r24, 0x01	; 1
 a28:	80 83       	st	Z, r24
		cbi(ADCSRA, ADPS2);
		cbi(ADCSRA, ADPS1);
		sbi(ADCSRA, ADPS0);
	#endif
	// enable a2d conversions
	sbi(ADCSRA, ADEN);
 a2a:	80 81       	ld	r24, Z
 a2c:	80 68       	ori	r24, 0x80	; 128
 a2e:	80 83       	st	Z, r24
	// here so they can be used as normal digital i/o; they will be
	// reconnected in Serial.begin()
#if defined(UCSRB)
	UCSRB = 0;
#elif defined(UCSR0B)
	UCSR0B = 0;
 a30:	10 92 c1 00 	sts	0x00C1, r1
 a34:	08 95       	ret

00000a36 <__udivmodsi4>:
 a36:	a1 e2       	ldi	r26, 0x21	; 33
 a38:	1a 2e       	mov	r1, r26
 a3a:	aa 1b       	sub	r26, r26
 a3c:	bb 1b       	sub	r27, r27
 a3e:	fd 01       	movw	r30, r26
 a40:	0d c0       	rjmp	.+26     	; 0xa5c <__udivmodsi4_ep>

00000a42 <__udivmodsi4_loop>:
 a42:	aa 1f       	adc	r26, r26
 a44:	bb 1f       	adc	r27, r27
 a46:	ee 1f       	adc	r30, r30
 a48:	ff 1f       	adc	r31, r31
 a4a:	a2 17       	cp	r26, r18
 a4c:	b3 07       	cpc	r27, r19
 a4e:	e4 07       	cpc	r30, r20
 a50:	f5 07       	cpc	r31, r21
 a52:	20 f0       	brcs	.+8      	; 0xa5c <__udivmodsi4_ep>
 a54:	a2 1b       	sub	r26, r18
 a56:	b3 0b       	sbc	r27, r19
 a58:	e4 0b       	sbc	r30, r20
 a5a:	f5 0b       	sbc	r31, r21

00000a5c <__udivmodsi4_ep>:
 a5c:	66 1f       	adc	r22, r22
 a5e:	77 1f       	adc	r23, r23
 a60:	88 1f       	adc	r24, r24
 a62:	99 1f       	adc	r25, r25
 a64:	1a 94       	dec	r1
 a66:	69 f7       	brne	.-38     	; 0xa42 <__udivmodsi4_loop>
 a68:	60 95       	com	r22
 a6a:	70 95       	com	r23
 a6c:	80 95       	com	r24
 a6e:	90 95       	com	r25
 a70:	9b 01       	movw	r18, r22
 a72:	ac 01       	movw	r20, r24
 a74:	bd 01       	movw	r22, r26
 a76:	cf 01       	movw	r24, r30
 a78:	08 95       	ret

00000a7a <__tablejump2__>:
 a7a:	ee 0f       	add	r30, r30
 a7c:	ff 1f       	adc	r31, r31

00000a7e <__tablejump__>:
 a7e:	05 90       	lpm	r0, Z+
 a80:	f4 91       	lpm	r31, Z
 a82:	e0 2d       	mov	r30, r0
 a84:	09 94       	ijmp

00000a86 <_exit>:
 a86:	f8 94       	cli

00000a88 <__stop_program>:
 a88:	ff cf       	rjmp	.-2      	; 0xa88 <__stop_program>
