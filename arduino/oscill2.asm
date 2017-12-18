
MisOscillo.ino.elf:     file format elf32-avr


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
  40:	0c 94 ef 03 	jmp	0x7de	; 0x7de <__vector_16>
  44:	0c 94 8a 00 	jmp	0x114	; 0x114 <__bad_interrupt>
  48:	0c 94 f6 02 	jmp	0x5ec	; 0x5ec <__vector_18>
  4c:	0c 94 28 03 	jmp	0x650	; 0x650 <__vector_19>
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
  c2:	58 03       	fmul	r21, r16

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
  d6:	ec e3       	ldi	r30, 0x3C	; 60
  d8:	f9 e0       	ldi	r31, 0x09	; 9
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
 102:	0e 94 98 04 	call	0x930	; 0x930 <__tablejump__>
 106:	c2 3c       	cpi	r28, 0xC2	; 194
 108:	d1 07       	cpc	r29, r17
 10a:	c9 f7       	brne	.-14     	; 0xfe <__do_global_ctors+0x8>
 10c:	0e 94 e0 03 	call	0x7c0	; 0x7c0 <main>
 110:	0c 94 9c 04 	jmp	0x938	; 0x938 <_exit>

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
 126:	0e 94 94 02 	call	0x528	; 0x528 <_ZN14HardwareSerial5beginEmh>
 
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  Serial.begin(9600);
  pinMode(lineA, INPUT);
 12a:	60 e0       	ldi	r22, 0x00	; 0
 12c:	80 91 04 01 	lds	r24, 0x0104
 130:	0e 94 19 01 	call	0x232	; 0x232 <pinMode>
  pinMode(lineB, INPUT);
 134:	60 e0       	ldi	r22, 0x00	; 0
 136:	80 91 02 01 	lds	r24, 0x0102
 13a:	0e 94 19 01 	call	0x232	; 0x232 <pinMode>
  pinMode(ledAB, OUTPUT);
 13e:	61 e0       	ldi	r22, 0x01	; 1
 140:	80 91 00 01 	lds	r24, 0x0100
 144:	0c 94 19 01 	jmp	0x232	; 0x232 <pinMode>

00000148 <_Z12recordSignalv>:
    idx = 0;
  }
}

// initializing buffer by beforeCnt 1-s
void recordSignal() {
 148:	ea e2       	ldi	r30, 0x2A	; 42
 14a:	f1 e0       	ldi	r31, 0x01	; 1
  byte la,lb,lab;
  byte *pbuf, *endp;
  for (int i=0; i<BEFORE_CNT; i++) {
    obuf[i] = '3';
 14c:	83 e3       	ldi	r24, 0x33	; 51
 14e:	81 93       	st	Z+, r24

// initializing buffer by beforeCnt 1-s
void recordSignal() {
  byte la,lb,lab;
  byte *pbuf, *endp;
  for (int i=0; i<BEFORE_CNT; i++) {
 150:	91 e0       	ldi	r25, 0x01	; 1
 152:	e4 33       	cpi	r30, 0x34	; 52
 154:	f9 07       	cpc	r31, r25
 156:	d9 f7       	brne	.-10     	; 0x14e <_Z12recordSignalv+0x6>
 158:	e4 e3       	ldi	r30, 0x34	; 52
 15a:	f1 e0       	ldi	r31, 0x01	; 1
    obuf[i] = '3';
  }
  pbuf = (byte*)(obuf + BEFORE_CNT);
  endp = (byte *)(obuf + (N-2));
  for (; pbuf<endp; ) {
     lab = PINB & 3; 
 15c:	83 b1       	in	r24, 0x03	; 3
 15e:	83 70       	andi	r24, 0x03	; 3
     *pbuf = lab + '0';
 160:	80 5d       	subi	r24, 0xD0	; 208
 162:	81 93       	st	Z+, r24
  for (int i=0; i<BEFORE_CNT; i++) {
    obuf[i] = '3';
  }
  pbuf = (byte*)(obuf + BEFORE_CNT);
  endp = (byte *)(obuf + (N-2));
  for (; pbuf<endp; ) {
 164:	81 e0       	ldi	r24, 0x01	; 1
 166:	e0 3f       	cpi	r30, 0xF0	; 240
 168:	f8 07       	cpc	r31, r24
 16a:	c0 f3       	brcs	.-16     	; 0x15c <_Z12recordSignalv+0x14>
     lab = PINB & 3; 
     *pbuf = lab + '0';
     pbuf++;
  }
  *pbuf = 0;
 16c:	10 82       	st	Z, r1
 16e:	08 95       	ret

00000170 <_Z6endRecv>:
}

void endRec() {
  obuf[N-1] = 0;
 170:	10 92 f1 01 	sts	0x01F1, r1
  Serial.print(obuf);
 174:	6a e2       	ldi	r22, 0x2A	; 42
 176:	71 e0       	ldi	r23, 0x01	; 1
 178:	82 ef       	ldi	r24, 0xF2	; 242
 17a:	91 e0       	ldi	r25, 0x01	; 1
 17c:	0e 94 d9 03 	call	0x7b2	; 0x7b2 <_ZN5Print5printEPKc>
  Serial.println();
 180:	82 ef       	ldi	r24, 0xF2	; 242
 182:	91 e0       	ldi	r25, 0x01	; 1
 184:	0e 94 db 03 	call	0x7b6	; 0x7b6 <_ZN5Print7printlnEv>
  idx=0;
 188:	10 92 29 01 	sts	0x0129, r1
 18c:	10 92 28 01 	sts	0x0128, r1
 190:	08 95       	ret

00000192 <loop>:
bool startingCondition(int la, int lb) {
  return la==0;
}

// the loop function runs over and over again forever
void loop() {
 192:	1f 93       	push	r17
 194:	cf 93       	push	r28
 196:	df 93       	push	r29
  int la = digitalRead(lineA);
 198:	80 91 04 01 	lds	r24, 0x0104
 19c:	0e 94 88 01 	call	0x310	; 0x310 <digitalRead>
 1a0:	ec 01       	movw	r28, r24
  int lb = digitalRead(lineB);
 1a2:	80 91 02 01 	lds	r24, 0x0102
 1a6:	0e 94 88 01 	call	0x310	; 0x310 <digitalRead>
  int lab = la;
  digitalWrite(ledAB, !lab);  
 1aa:	11 e0       	ldi	r17, 0x01	; 1
 1ac:	cd 2b       	or	r28, r29
 1ae:	09 f0       	breq	.+2      	; 0x1b2 <loop+0x20>
 1b0:	10 e0       	ldi	r17, 0x00	; 0
 1b2:	61 2f       	mov	r22, r17
 1b4:	80 91 00 01 	lds	r24, 0x0100
 1b8:	0e 94 52 01 	call	0x2a4	; 0x2a4 <digitalWrite>
  if (startingCondition(la,lb)) {
 1bc:	11 23       	and	r17, r17
 1be:	61 f0       	breq	.+24     	; 0x1d8 <loop+0x46>
    // Serial.println("Start recording");
    recordSignal();  
 1c0:	0e 94 a4 00 	call	0x148	; 0x148 <_Z12recordSignalv>
    digitalWrite(ledAB, LOW);  
 1c4:	60 e0       	ldi	r22, 0x00	; 0
 1c6:	80 91 00 01 	lds	r24, 0x0100
 1ca:	0e 94 52 01 	call	0x2a4	; 0x2a4 <digitalWrite>
    endRec();
  }
}
 1ce:	df 91       	pop	r29
 1d0:	cf 91       	pop	r28
 1d2:	1f 91       	pop	r17
  digitalWrite(ledAB, !lab);  
  if (startingCondition(la,lb)) {
    // Serial.println("Start recording");
    recordSignal();  
    digitalWrite(ledAB, LOW);  
    endRec();
 1d4:	0c 94 b8 00 	jmp	0x170	; 0x170 <_Z6endRecv>
  }
}
 1d8:	df 91       	pop	r29
 1da:	cf 91       	pop	r28
 1dc:	1f 91       	pop	r17
 1de:	08 95       	ret

000001e0 <turnOffPWM>:
//
//static inline void turnOffPWM(uint8_t timer) __attribute__ ((always_inline));
//static inline void turnOffPWM(uint8_t timer)
static void turnOffPWM(uint8_t timer)
{
	switch (timer)
 1e0:	83 30       	cpi	r24, 0x03	; 3
 1e2:	81 f0       	breq	.+32     	; 0x204 <turnOffPWM+0x24>
 1e4:	28 f4       	brcc	.+10     	; 0x1f0 <turnOffPWM+0x10>
 1e6:	81 30       	cpi	r24, 0x01	; 1
 1e8:	99 f0       	breq	.+38     	; 0x210 <turnOffPWM+0x30>
 1ea:	82 30       	cpi	r24, 0x02	; 2
 1ec:	a1 f0       	breq	.+40     	; 0x216 <turnOffPWM+0x36>
 1ee:	08 95       	ret
 1f0:	87 30       	cpi	r24, 0x07	; 7
 1f2:	a9 f0       	breq	.+42     	; 0x21e <turnOffPWM+0x3e>
 1f4:	88 30       	cpi	r24, 0x08	; 8
 1f6:	b9 f0       	breq	.+46     	; 0x226 <turnOffPWM+0x46>
 1f8:	84 30       	cpi	r24, 0x04	; 4
 1fa:	d1 f4       	brne	.+52     	; 0x230 <turnOffPWM+0x50>
	{
		#if defined(TCCR1A) && defined(COM1A1)
		case TIMER1A:   cbi(TCCR1A, COM1A1);    break;
		#endif
		#if defined(TCCR1A) && defined(COM1B1)
		case TIMER1B:   cbi(TCCR1A, COM1B1);    break;
 1fc:	80 91 80 00 	lds	r24, 0x0080
 200:	8f 7d       	andi	r24, 0xDF	; 223
 202:	03 c0       	rjmp	.+6      	; 0x20a <turnOffPWM+0x2a>
static void turnOffPWM(uint8_t timer)
{
	switch (timer)
	{
		#if defined(TCCR1A) && defined(COM1A1)
		case TIMER1A:   cbi(TCCR1A, COM1A1);    break;
 204:	80 91 80 00 	lds	r24, 0x0080
 208:	8f 77       	andi	r24, 0x7F	; 127
		#endif
		#if defined(TCCR1A) && defined(COM1B1)
		case TIMER1B:   cbi(TCCR1A, COM1B1);    break;
 20a:	80 93 80 00 	sts	0x0080, r24
 20e:	08 95       	ret
		#if defined(TCCR2) && defined(COM21)
		case  TIMER2:   cbi(TCCR2, COM21);      break;
		#endif
		
		#if defined(TCCR0A) && defined(COM0A1)
		case  TIMER0A:  cbi(TCCR0A, COM0A1);    break;
 210:	84 b5       	in	r24, 0x24	; 36
 212:	8f 77       	andi	r24, 0x7F	; 127
 214:	02 c0       	rjmp	.+4      	; 0x21a <turnOffPWM+0x3a>
		#endif
		
		#if defined(TCCR0A) && defined(COM0B1)
		case  TIMER0B:  cbi(TCCR0A, COM0B1);    break;
 216:	84 b5       	in	r24, 0x24	; 36
 218:	8f 7d       	andi	r24, 0xDF	; 223
 21a:	84 bd       	out	0x24, r24	; 36
 21c:	08 95       	ret
		#endif
		#if defined(TCCR2A) && defined(COM2A1)
		case  TIMER2A:  cbi(TCCR2A, COM2A1);    break;
 21e:	80 91 b0 00 	lds	r24, 0x00B0
 222:	8f 77       	andi	r24, 0x7F	; 127
 224:	03 c0       	rjmp	.+6      	; 0x22c <turnOffPWM+0x4c>
		#endif
		#if defined(TCCR2A) && defined(COM2B1)
		case  TIMER2B:  cbi(TCCR2A, COM2B1);    break;
 226:	80 91 b0 00 	lds	r24, 0x00B0
 22a:	8f 7d       	andi	r24, 0xDF	; 223
 22c:	80 93 b0 00 	sts	0x00B0, r24
 230:	08 95       	ret

00000232 <pinMode>:
#define ARDUINO_MAIN
#include "wiring_private.h"
#include "pins_arduino.h"

void pinMode(uint8_t pin, uint8_t mode)
{
 232:	cf 93       	push	r28
 234:	df 93       	push	r29
	uint8_t bit = digitalPinToBitMask(pin);
 236:	90 e0       	ldi	r25, 0x00	; 0
 238:	fc 01       	movw	r30, r24
 23a:	e4 58       	subi	r30, 0x84	; 132
 23c:	ff 4f       	sbci	r31, 0xFF	; 255
 23e:	24 91       	lpm	r18, Z
	uint8_t port = digitalPinToPort(pin);
 240:	fc 01       	movw	r30, r24
 242:	e0 57       	subi	r30, 0x70	; 112
 244:	ff 4f       	sbci	r31, 0xFF	; 255
 246:	84 91       	lpm	r24, Z
	volatile uint8_t *reg, *out;

	if (port == NOT_A_PIN) return;
 248:	88 23       	and	r24, r24
 24a:	49 f1       	breq	.+82     	; 0x29e <pinMode+0x6c>

	// JWS: can I let the optimizer do this?
	reg = portModeRegister(port);
 24c:	90 e0       	ldi	r25, 0x00	; 0
 24e:	88 0f       	add	r24, r24
 250:	99 1f       	adc	r25, r25
 252:	fc 01       	movw	r30, r24
 254:	e8 54       	subi	r30, 0x48	; 72
 256:	ff 4f       	sbci	r31, 0xFF	; 255
 258:	a5 91       	lpm	r26, Z+
 25a:	b4 91       	lpm	r27, Z
	out = portOutputRegister(port);
 25c:	82 55       	subi	r24, 0x52	; 82
 25e:	9f 4f       	sbci	r25, 0xFF	; 255
 260:	fc 01       	movw	r30, r24
 262:	c5 91       	lpm	r28, Z+
 264:	d4 91       	lpm	r29, Z

	if (mode == INPUT) { 
		uint8_t oldSREG = SREG;
 266:	9f b7       	in	r25, 0x3f	; 63

	// JWS: can I let the optimizer do this?
	reg = portModeRegister(port);
	out = portOutputRegister(port);

	if (mode == INPUT) { 
 268:	61 11       	cpse	r22, r1
 26a:	08 c0       	rjmp	.+16     	; 0x27c <pinMode+0x4a>
		uint8_t oldSREG = SREG;
                cli();
 26c:	f8 94       	cli
		*reg &= ~bit;
 26e:	8c 91       	ld	r24, X
 270:	20 95       	com	r18
 272:	82 23       	and	r24, r18
 274:	8c 93       	st	X, r24
		*out &= ~bit;
 276:	88 81       	ld	r24, Y
 278:	82 23       	and	r24, r18
 27a:	0a c0       	rjmp	.+20     	; 0x290 <pinMode+0x5e>
		SREG = oldSREG;
	} else if (mode == INPUT_PULLUP) {
 27c:	62 30       	cpi	r22, 0x02	; 2
 27e:	51 f4       	brne	.+20     	; 0x294 <pinMode+0x62>
		uint8_t oldSREG = SREG;
                cli();
 280:	f8 94       	cli
		*reg &= ~bit;
 282:	8c 91       	ld	r24, X
 284:	32 2f       	mov	r19, r18
 286:	30 95       	com	r19
 288:	83 23       	and	r24, r19
 28a:	8c 93       	st	X, r24
		*out |= bit;
 28c:	88 81       	ld	r24, Y
 28e:	82 2b       	or	r24, r18
 290:	88 83       	st	Y, r24
 292:	04 c0       	rjmp	.+8      	; 0x29c <pinMode+0x6a>
		SREG = oldSREG;
	} else {
		uint8_t oldSREG = SREG;
                cli();
 294:	f8 94       	cli
		*reg |= bit;
 296:	8c 91       	ld	r24, X
 298:	82 2b       	or	r24, r18
 29a:	8c 93       	st	X, r24
		SREG = oldSREG;
 29c:	9f bf       	out	0x3f, r25	; 63
	}
}
 29e:	df 91       	pop	r29
 2a0:	cf 91       	pop	r28
 2a2:	08 95       	ret

000002a4 <digitalWrite>:
		#endif
	}
}

void digitalWrite(uint8_t pin, uint8_t val)
{
 2a4:	0f 93       	push	r16
 2a6:	1f 93       	push	r17
 2a8:	cf 93       	push	r28
 2aa:	df 93       	push	r29
 2ac:	1f 92       	push	r1
 2ae:	cd b7       	in	r28, 0x3d	; 61
 2b0:	de b7       	in	r29, 0x3e	; 62
	uint8_t timer = digitalPinToTimer(pin);
 2b2:	28 2f       	mov	r18, r24
 2b4:	30 e0       	ldi	r19, 0x00	; 0
 2b6:	f9 01       	movw	r30, r18
 2b8:	e8 59       	subi	r30, 0x98	; 152
 2ba:	ff 4f       	sbci	r31, 0xFF	; 255
 2bc:	84 91       	lpm	r24, Z
	uint8_t bit = digitalPinToBitMask(pin);
 2be:	f9 01       	movw	r30, r18
 2c0:	e4 58       	subi	r30, 0x84	; 132
 2c2:	ff 4f       	sbci	r31, 0xFF	; 255
 2c4:	14 91       	lpm	r17, Z
	uint8_t port = digitalPinToPort(pin);
 2c6:	f9 01       	movw	r30, r18
 2c8:	e0 57       	subi	r30, 0x70	; 112
 2ca:	ff 4f       	sbci	r31, 0xFF	; 255
 2cc:	04 91       	lpm	r16, Z
	volatile uint8_t *out;

	if (port == NOT_A_PIN) return;
 2ce:	00 23       	and	r16, r16
 2d0:	c9 f0       	breq	.+50     	; 0x304 <digitalWrite+0x60>

	// If the pin that support PWM output, we need to turn it off
	// before doing a digital write.
	if (timer != NOT_ON_TIMER) turnOffPWM(timer);
 2d2:	88 23       	and	r24, r24
 2d4:	21 f0       	breq	.+8      	; 0x2de <digitalWrite+0x3a>
 2d6:	69 83       	std	Y+1, r22	; 0x01
 2d8:	0e 94 f0 00 	call	0x1e0	; 0x1e0 <turnOffPWM>
 2dc:	69 81       	ldd	r22, Y+1	; 0x01

	out = portOutputRegister(port);
 2de:	e0 2f       	mov	r30, r16
 2e0:	f0 e0       	ldi	r31, 0x00	; 0
 2e2:	ee 0f       	add	r30, r30
 2e4:	ff 1f       	adc	r31, r31
 2e6:	e2 55       	subi	r30, 0x52	; 82
 2e8:	ff 4f       	sbci	r31, 0xFF	; 255
 2ea:	a5 91       	lpm	r26, Z+
 2ec:	b4 91       	lpm	r27, Z

	uint8_t oldSREG = SREG;
 2ee:	9f b7       	in	r25, 0x3f	; 63
	cli();
 2f0:	f8 94       	cli

	if (val == LOW) {
		*out &= ~bit;
 2f2:	8c 91       	ld	r24, X
	out = portOutputRegister(port);

	uint8_t oldSREG = SREG;
	cli();

	if (val == LOW) {
 2f4:	61 11       	cpse	r22, r1
 2f6:	03 c0       	rjmp	.+6      	; 0x2fe <digitalWrite+0x5a>
		*out &= ~bit;
 2f8:	10 95       	com	r17
 2fa:	81 23       	and	r24, r17
 2fc:	01 c0       	rjmp	.+2      	; 0x300 <digitalWrite+0x5c>
	} else {
		*out |= bit;
 2fe:	81 2b       	or	r24, r17
 300:	8c 93       	st	X, r24
	}

	SREG = oldSREG;
 302:	9f bf       	out	0x3f, r25	; 63
}
 304:	0f 90       	pop	r0
 306:	df 91       	pop	r29
 308:	cf 91       	pop	r28
 30a:	1f 91       	pop	r17
 30c:	0f 91       	pop	r16
 30e:	08 95       	ret

00000310 <digitalRead>:

int digitalRead(uint8_t pin)
{
 310:	cf 93       	push	r28
 312:	df 93       	push	r29
	uint8_t timer = digitalPinToTimer(pin);
 314:	28 2f       	mov	r18, r24
 316:	30 e0       	ldi	r19, 0x00	; 0
 318:	f9 01       	movw	r30, r18
 31a:	e8 59       	subi	r30, 0x98	; 152
 31c:	ff 4f       	sbci	r31, 0xFF	; 255
 31e:	84 91       	lpm	r24, Z
	uint8_t bit = digitalPinToBitMask(pin);
 320:	f9 01       	movw	r30, r18
 322:	e4 58       	subi	r30, 0x84	; 132
 324:	ff 4f       	sbci	r31, 0xFF	; 255
 326:	d4 91       	lpm	r29, Z
	uint8_t port = digitalPinToPort(pin);
 328:	f9 01       	movw	r30, r18
 32a:	e0 57       	subi	r30, 0x70	; 112
 32c:	ff 4f       	sbci	r31, 0xFF	; 255
 32e:	c4 91       	lpm	r28, Z

	if (port == NOT_A_PIN) return LOW;
 330:	cc 23       	and	r28, r28
 332:	91 f0       	breq	.+36     	; 0x358 <digitalRead+0x48>

	// If the pin that support PWM output, we need to turn it off
	// before getting a digital reading.
	if (timer != NOT_ON_TIMER) turnOffPWM(timer);
 334:	81 11       	cpse	r24, r1
 336:	0e 94 f0 00 	call	0x1e0	; 0x1e0 <turnOffPWM>

	if (*portInputRegister(port) & bit) return HIGH;
 33a:	ec 2f       	mov	r30, r28
 33c:	f0 e0       	ldi	r31, 0x00	; 0
 33e:	ee 0f       	add	r30, r30
 340:	ff 1f       	adc	r31, r31
 342:	ec 55       	subi	r30, 0x5C	; 92
 344:	ff 4f       	sbci	r31, 0xFF	; 255
 346:	a5 91       	lpm	r26, Z+
 348:	b4 91       	lpm	r27, Z
 34a:	2c 91       	ld	r18, X
 34c:	2d 23       	and	r18, r29
 34e:	81 e0       	ldi	r24, 0x01	; 1
 350:	90 e0       	ldi	r25, 0x00	; 0
 352:	21 f4       	brne	.+8      	; 0x35c <digitalRead+0x4c>
 354:	80 e0       	ldi	r24, 0x00	; 0
 356:	02 c0       	rjmp	.+4      	; 0x35c <digitalRead+0x4c>
{
	uint8_t timer = digitalPinToTimer(pin);
	uint8_t bit = digitalPinToBitMask(pin);
	uint8_t port = digitalPinToPort(pin);

	if (port == NOT_A_PIN) return LOW;
 358:	80 e0       	ldi	r24, 0x00	; 0
 35a:	90 e0       	ldi	r25, 0x00	; 0
	// before getting a digital reading.
	if (timer != NOT_ON_TIMER) turnOffPWM(timer);

	if (*portInputRegister(port) & bit) return HIGH;
	return LOW;
}
 35c:	df 91       	pop	r29
 35e:	cf 91       	pop	r28
 360:	08 95       	ret

00000362 <_ZN14HardwareSerial9availableEv>:
  // clear any received data
  _rx_buffer_head = _rx_buffer_tail;
}

int HardwareSerial::available(void)
{
 362:	fc 01       	movw	r30, r24
  return ((unsigned int)(SERIAL_RX_BUFFER_SIZE + _rx_buffer_head - _rx_buffer_tail)) % SERIAL_RX_BUFFER_SIZE;
 364:	81 8d       	ldd	r24, Z+25	; 0x19
 366:	22 8d       	ldd	r18, Z+26	; 0x1a
 368:	90 e0       	ldi	r25, 0x00	; 0
 36a:	80 5c       	subi	r24, 0xC0	; 192
 36c:	9f 4f       	sbci	r25, 0xFF	; 255
 36e:	82 1b       	sub	r24, r18
 370:	91 09       	sbc	r25, r1
}
 372:	8f 73       	andi	r24, 0x3F	; 63
 374:	99 27       	eor	r25, r25
 376:	08 95       	ret

00000378 <_ZN14HardwareSerial4peekEv>:

int HardwareSerial::peek(void)
{
 378:	fc 01       	movw	r30, r24
  if (_rx_buffer_head == _rx_buffer_tail) {
 37a:	91 8d       	ldd	r25, Z+25	; 0x19
 37c:	82 8d       	ldd	r24, Z+26	; 0x1a
 37e:	98 17       	cp	r25, r24
 380:	31 f0       	breq	.+12     	; 0x38e <_ZN14HardwareSerial4peekEv+0x16>
    return -1;
  } else {
    return _rx_buffer[_rx_buffer_tail];
 382:	82 8d       	ldd	r24, Z+26	; 0x1a
 384:	e8 0f       	add	r30, r24
 386:	f1 1d       	adc	r31, r1
 388:	85 8d       	ldd	r24, Z+29	; 0x1d
 38a:	90 e0       	ldi	r25, 0x00	; 0
 38c:	08 95       	ret
}

int HardwareSerial::peek(void)
{
  if (_rx_buffer_head == _rx_buffer_tail) {
    return -1;
 38e:	8f ef       	ldi	r24, 0xFF	; 255
 390:	9f ef       	ldi	r25, 0xFF	; 255
  } else {
    return _rx_buffer[_rx_buffer_tail];
  }
}
 392:	08 95       	ret

00000394 <_ZN14HardwareSerial4readEv>:

int HardwareSerial::read(void)
{
 394:	fc 01       	movw	r30, r24
  // if the head isn't ahead of the tail, we don't have any characters
  if (_rx_buffer_head == _rx_buffer_tail) {
 396:	91 8d       	ldd	r25, Z+25	; 0x19
 398:	82 8d       	ldd	r24, Z+26	; 0x1a
 39a:	98 17       	cp	r25, r24
 39c:	61 f0       	breq	.+24     	; 0x3b6 <_ZN14HardwareSerial4readEv+0x22>
    return -1;
  } else {
    unsigned char c = _rx_buffer[_rx_buffer_tail];
 39e:	82 8d       	ldd	r24, Z+26	; 0x1a
 3a0:	df 01       	movw	r26, r30
 3a2:	a8 0f       	add	r26, r24
 3a4:	b1 1d       	adc	r27, r1
 3a6:	5d 96       	adiw	r26, 0x1d	; 29
 3a8:	8c 91       	ld	r24, X
    _rx_buffer_tail = (rx_buffer_index_t)(_rx_buffer_tail + 1) % SERIAL_RX_BUFFER_SIZE;
 3aa:	92 8d       	ldd	r25, Z+26	; 0x1a
 3ac:	9f 5f       	subi	r25, 0xFF	; 255
 3ae:	9f 73       	andi	r25, 0x3F	; 63
 3b0:	92 8f       	std	Z+26, r25	; 0x1a
    return c;
 3b2:	90 e0       	ldi	r25, 0x00	; 0
 3b4:	08 95       	ret

int HardwareSerial::read(void)
{
  // if the head isn't ahead of the tail, we don't have any characters
  if (_rx_buffer_head == _rx_buffer_tail) {
    return -1;
 3b6:	8f ef       	ldi	r24, 0xFF	; 255
 3b8:	9f ef       	ldi	r25, 0xFF	; 255
  } else {
    unsigned char c = _rx_buffer[_rx_buffer_tail];
    _rx_buffer_tail = (rx_buffer_index_t)(_rx_buffer_tail + 1) % SERIAL_RX_BUFFER_SIZE;
    return c;
  }
}
 3ba:	08 95       	ret

000003bc <_Z14serialEventRunv>:
#endif

void serialEventRun(void)
{
#if defined(HAVE_HWSERIAL0)
  if (Serial0_available && serialEvent && Serial0_available()) serialEvent();
 3bc:	8e e4       	ldi	r24, 0x4E	; 78
 3be:	93 e0       	ldi	r25, 0x03	; 3
 3c0:	89 2b       	or	r24, r25
 3c2:	49 f0       	breq	.+18     	; 0x3d6 <_Z14serialEventRunv+0x1a>
 3c4:	80 e0       	ldi	r24, 0x00	; 0
 3c6:	90 e0       	ldi	r25, 0x00	; 0
 3c8:	89 2b       	or	r24, r25
 3ca:	29 f0       	breq	.+10     	; 0x3d6 <_Z14serialEventRunv+0x1a>
 3cc:	0e 94 4e 03 	call	0x69c	; 0x69c <_Z17Serial0_availablev>
 3d0:	81 11       	cpse	r24, r1
 3d2:	0c 94 00 00 	jmp	0	; 0x0 <__vectors>
 3d6:	08 95       	ret

000003d8 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>:
}

// Actual interrupt handlers //////////////////////////////////////////////////////////////

void HardwareSerial::_tx_udr_empty_irq(void)
{
 3d8:	fc 01       	movw	r30, r24
  // If interrupts are enabled, there must be more data in the output
  // buffer. Send the next byte
  unsigned char c = _tx_buffer[_tx_buffer_tail];
 3da:	84 8d       	ldd	r24, Z+28	; 0x1c
 3dc:	df 01       	movw	r26, r30
 3de:	a8 0f       	add	r26, r24
 3e0:	b1 1d       	adc	r27, r1
 3e2:	a3 5a       	subi	r26, 0xA3	; 163
 3e4:	bf 4f       	sbci	r27, 0xFF	; 255
 3e6:	2c 91       	ld	r18, X
  _tx_buffer_tail = (_tx_buffer_tail + 1) % SERIAL_TX_BUFFER_SIZE;
 3e8:	84 8d       	ldd	r24, Z+28	; 0x1c
 3ea:	90 e0       	ldi	r25, 0x00	; 0
 3ec:	01 96       	adiw	r24, 0x01	; 1
 3ee:	8f 73       	andi	r24, 0x3F	; 63
 3f0:	99 27       	eor	r25, r25
 3f2:	84 8f       	std	Z+28, r24	; 0x1c

  *_udr = c;
 3f4:	a6 89       	ldd	r26, Z+22	; 0x16
 3f6:	b7 89       	ldd	r27, Z+23	; 0x17
 3f8:	2c 93       	st	X, r18

  // clear the TXC bit -- "can be cleared by writing a one to its bit
  // location". This makes sure flush() won't return until the bytes
  // actually got written
  sbi(*_ucsra, TXC0);
 3fa:	a0 89       	ldd	r26, Z+16	; 0x10
 3fc:	b1 89       	ldd	r27, Z+17	; 0x11
 3fe:	8c 91       	ld	r24, X
 400:	80 64       	ori	r24, 0x40	; 64
 402:	8c 93       	st	X, r24

  if (_tx_buffer_head == _tx_buffer_tail) {
 404:	93 8d       	ldd	r25, Z+27	; 0x1b
 406:	84 8d       	ldd	r24, Z+28	; 0x1c
 408:	98 13       	cpse	r25, r24
 40a:	06 c0       	rjmp	.+12     	; 0x418 <_ZN14HardwareSerial17_tx_udr_empty_irqEv+0x40>
    // Buffer empty, so disable interrupts
    cbi(*_ucsrb, UDRIE0);
 40c:	02 88       	ldd	r0, Z+18	; 0x12
 40e:	f3 89       	ldd	r31, Z+19	; 0x13
 410:	e0 2d       	mov	r30, r0
 412:	80 81       	ld	r24, Z
 414:	8f 7d       	andi	r24, 0xDF	; 223
 416:	80 83       	st	Z, r24
 418:	08 95       	ret

0000041a <_ZN14HardwareSerial5flushEv>:
  if (head >= tail) return SERIAL_TX_BUFFER_SIZE - 1 - head + tail;
  return tail - head - 1;
}

void HardwareSerial::flush()
{
 41a:	cf 93       	push	r28
 41c:	df 93       	push	r29
 41e:	ec 01       	movw	r28, r24
  // If we have never written a byte, no need to flush. This special
  // case is needed since there is no way to force the TXC (transmit
  // complete) bit to 1 during initialization
  if (!_written)
 420:	88 8d       	ldd	r24, Y+24	; 0x18
 422:	88 23       	and	r24, r24
 424:	c9 f0       	breq	.+50     	; 0x458 <_ZN14HardwareSerial5flushEv+0x3e>
    return;

  while (bit_is_set(*_ucsrb, UDRIE0) || bit_is_clear(*_ucsra, TXC0)) {
 426:	ea 89       	ldd	r30, Y+18	; 0x12
 428:	fb 89       	ldd	r31, Y+19	; 0x13
 42a:	80 81       	ld	r24, Z
 42c:	85 fd       	sbrc	r24, 5
 42e:	05 c0       	rjmp	.+10     	; 0x43a <_ZN14HardwareSerial5flushEv+0x20>
 430:	a8 89       	ldd	r26, Y+16	; 0x10
 432:	b9 89       	ldd	r27, Y+17	; 0x11
 434:	8c 91       	ld	r24, X
 436:	86 fd       	sbrc	r24, 6
 438:	0f c0       	rjmp	.+30     	; 0x458 <_ZN14HardwareSerial5flushEv+0x3e>
    if (bit_is_clear(SREG, SREG_I) && bit_is_set(*_ucsrb, UDRIE0))
 43a:	0f b6       	in	r0, 0x3f	; 63
 43c:	07 fc       	sbrc	r0, 7
 43e:	f5 cf       	rjmp	.-22     	; 0x42a <_ZN14HardwareSerial5flushEv+0x10>
 440:	80 81       	ld	r24, Z
 442:	85 ff       	sbrs	r24, 5
 444:	f2 cf       	rjmp	.-28     	; 0x42a <_ZN14HardwareSerial5flushEv+0x10>
	// Interrupts are globally disabled, but the DR empty
	// interrupt should be enabled, so poll the DR empty flag to
	// prevent deadlock
	if (bit_is_set(*_ucsra, UDRE0))
 446:	a8 89       	ldd	r26, Y+16	; 0x10
 448:	b9 89       	ldd	r27, Y+17	; 0x11
 44a:	8c 91       	ld	r24, X
 44c:	85 ff       	sbrs	r24, 5
 44e:	ed cf       	rjmp	.-38     	; 0x42a <_ZN14HardwareSerial5flushEv+0x10>
	  _tx_udr_empty_irq();
 450:	ce 01       	movw	r24, r28
 452:	0e 94 ec 01 	call	0x3d8	; 0x3d8 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>
 456:	e7 cf       	rjmp	.-50     	; 0x426 <_ZN14HardwareSerial5flushEv+0xc>
  }
  // If we get here, nothing is queued anymore (DRIE is disabled) and
  // the hardware finished tranmission (TXC is set).
}
 458:	df 91       	pop	r29
 45a:	cf 91       	pop	r28
 45c:	08 95       	ret

0000045e <_ZN14HardwareSerial5writeEh>:

size_t HardwareSerial::write(uint8_t c)
{
 45e:	cf 92       	push	r12
 460:	df 92       	push	r13
 462:	ff 92       	push	r15
 464:	0f 93       	push	r16
 466:	1f 93       	push	r17
 468:	cf 93       	push	r28
 46a:	df 93       	push	r29
 46c:	1f 92       	push	r1
 46e:	cd b7       	in	r28, 0x3d	; 61
 470:	de b7       	in	r29, 0x3e	; 62
 472:	6c 01       	movw	r12, r24
  _written = true;
 474:	81 e0       	ldi	r24, 0x01	; 1
 476:	d6 01       	movw	r26, r12
 478:	58 96       	adiw	r26, 0x18	; 24
 47a:	8c 93       	st	X, r24
 47c:	58 97       	sbiw	r26, 0x18	; 24
  // If the buffer and the data register is empty, just write the byte
  // to the data register and be done. This shortcut helps
  // significantly improve the effective datarate at high (>
  // 500kbit/s) bitrates, where interrupt overhead becomes a slowdown.
  if (_tx_buffer_head == _tx_buffer_tail && bit_is_set(*_ucsra, UDRE0)) {
 47e:	5b 96       	adiw	r26, 0x1b	; 27
 480:	9c 91       	ld	r25, X
 482:	5b 97       	sbiw	r26, 0x1b	; 27
 484:	5c 96       	adiw	r26, 0x1c	; 28
 486:	8c 91       	ld	r24, X
 488:	5c 97       	sbiw	r26, 0x1c	; 28
 48a:	98 13       	cpse	r25, r24
 48c:	07 c0       	rjmp	.+14     	; 0x49c <_ZN14HardwareSerial5writeEh+0x3e>
 48e:	50 96       	adiw	r26, 0x10	; 16
 490:	ed 91       	ld	r30, X+
 492:	fc 91       	ld	r31, X
 494:	51 97       	sbiw	r26, 0x11	; 17
 496:	80 81       	ld	r24, Z
 498:	85 fd       	sbrc	r24, 5
 49a:	2e c0       	rjmp	.+92     	; 0x4f8 <_ZN14HardwareSerial5writeEh+0x9a>
    *_udr = c;
    sbi(*_ucsra, TXC0);
    return 1;
  }
  tx_buffer_index_t i = (_tx_buffer_head + 1) % SERIAL_TX_BUFFER_SIZE;
 49c:	f6 01       	movw	r30, r12
 49e:	03 8d       	ldd	r16, Z+27	; 0x1b
 4a0:	10 e0       	ldi	r17, 0x00	; 0
 4a2:	0f 5f       	subi	r16, 0xFF	; 255
 4a4:	1f 4f       	sbci	r17, 0xFF	; 255
 4a6:	0f 73       	andi	r16, 0x3F	; 63
 4a8:	11 27       	eor	r17, r17
 4aa:	f0 2e       	mov	r15, r16
	
  // If the output buffer is full, there's nothing for it other than to 
  // wait for the interrupt handler to empty it a bit
  while (i == _tx_buffer_tail) {
 4ac:	f6 01       	movw	r30, r12
 4ae:	84 8d       	ldd	r24, Z+28	; 0x1c
 4b0:	f8 12       	cpse	r15, r24
 4b2:	11 c0       	rjmp	.+34     	; 0x4d6 <_ZN14HardwareSerial5writeEh+0x78>
    if (bit_is_clear(SREG, SREG_I)) {
 4b4:	0f b6       	in	r0, 0x3f	; 63
 4b6:	07 fc       	sbrc	r0, 7
 4b8:	f9 cf       	rjmp	.-14     	; 0x4ac <_ZN14HardwareSerial5writeEh+0x4e>
      // Interrupts are disabled, so we'll have to poll the data
      // register empty flag ourselves. If it is set, pretend an
      // interrupt has happened and call the handler to free up
      // space for us.
      if(bit_is_set(*_ucsra, UDRE0))
 4ba:	d6 01       	movw	r26, r12
 4bc:	50 96       	adiw	r26, 0x10	; 16
 4be:	ed 91       	ld	r30, X+
 4c0:	fc 91       	ld	r31, X
 4c2:	51 97       	sbiw	r26, 0x11	; 17
 4c4:	80 81       	ld	r24, Z
 4c6:	85 ff       	sbrs	r24, 5
 4c8:	f1 cf       	rjmp	.-30     	; 0x4ac <_ZN14HardwareSerial5writeEh+0x4e>
	_tx_udr_empty_irq();
 4ca:	c6 01       	movw	r24, r12
 4cc:	69 83       	std	Y+1, r22	; 0x01
 4ce:	0e 94 ec 01 	call	0x3d8	; 0x3d8 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>
 4d2:	69 81       	ldd	r22, Y+1	; 0x01
 4d4:	eb cf       	rjmp	.-42     	; 0x4ac <_ZN14HardwareSerial5writeEh+0x4e>
    } else {
      // nop, the interrupt handler will free up space for us
    }
  }

  _tx_buffer[_tx_buffer_head] = c;
 4d6:	83 8d       	ldd	r24, Z+27	; 0x1b
 4d8:	e8 0f       	add	r30, r24
 4da:	f1 1d       	adc	r31, r1
 4dc:	e3 5a       	subi	r30, 0xA3	; 163
 4de:	ff 4f       	sbci	r31, 0xFF	; 255
 4e0:	60 83       	st	Z, r22
  _tx_buffer_head = i;
 4e2:	d6 01       	movw	r26, r12
 4e4:	5b 96       	adiw	r26, 0x1b	; 27
 4e6:	0c 93       	st	X, r16
 4e8:	5b 97       	sbiw	r26, 0x1b	; 27
	
  sbi(*_ucsrb, UDRIE0);
 4ea:	52 96       	adiw	r26, 0x12	; 18
 4ec:	ed 91       	ld	r30, X+
 4ee:	fc 91       	ld	r31, X
 4f0:	53 97       	sbiw	r26, 0x13	; 19
 4f2:	80 81       	ld	r24, Z
 4f4:	80 62       	ori	r24, 0x20	; 32
 4f6:	0c c0       	rjmp	.+24     	; 0x510 <_ZN14HardwareSerial5writeEh+0xb2>
  // If the buffer and the data register is empty, just write the byte
  // to the data register and be done. This shortcut helps
  // significantly improve the effective datarate at high (>
  // 500kbit/s) bitrates, where interrupt overhead becomes a slowdown.
  if (_tx_buffer_head == _tx_buffer_tail && bit_is_set(*_ucsra, UDRE0)) {
    *_udr = c;
 4f8:	d6 01       	movw	r26, r12
 4fa:	56 96       	adiw	r26, 0x16	; 22
 4fc:	ed 91       	ld	r30, X+
 4fe:	fc 91       	ld	r31, X
 500:	57 97       	sbiw	r26, 0x17	; 23
 502:	60 83       	st	Z, r22
    sbi(*_ucsra, TXC0);
 504:	50 96       	adiw	r26, 0x10	; 16
 506:	ed 91       	ld	r30, X+
 508:	fc 91       	ld	r31, X
 50a:	51 97       	sbiw	r26, 0x11	; 17
 50c:	80 81       	ld	r24, Z
 50e:	80 64       	ori	r24, 0x40	; 64
 510:	80 83       	st	Z, r24
  _tx_buffer_head = i;
	
  sbi(*_ucsrb, UDRIE0);
  
  return 1;
}
 512:	81 e0       	ldi	r24, 0x01	; 1
 514:	90 e0       	ldi	r25, 0x00	; 0
 516:	0f 90       	pop	r0
 518:	df 91       	pop	r29
 51a:	cf 91       	pop	r28
 51c:	1f 91       	pop	r17
 51e:	0f 91       	pop	r16
 520:	ff 90       	pop	r15
 522:	df 90       	pop	r13
 524:	cf 90       	pop	r12
 526:	08 95       	ret

00000528 <_ZN14HardwareSerial5beginEmh>:
}

// Public Methods //////////////////////////////////////////////////////////////

void HardwareSerial::begin(unsigned long baud, byte config)
{
 528:	bf 92       	push	r11
 52a:	cf 92       	push	r12
 52c:	df 92       	push	r13
 52e:	ef 92       	push	r14
 530:	ff 92       	push	r15
 532:	cf 93       	push	r28
 534:	df 93       	push	r29
 536:	ec 01       	movw	r28, r24
 538:	6a 01       	movw	r12, r20
 53a:	7b 01       	movw	r14, r22
 53c:	b2 2e       	mov	r11, r18
  // Try u2x mode first
  uint16_t baud_setting = (F_CPU / 4 / baud - 1) / 2;
  *_ucsra = 1 << U2X0;
 53e:	e8 89       	ldd	r30, Y+16	; 0x10
 540:	f9 89       	ldd	r31, Y+17	; 0x11
 542:	82 e0       	ldi	r24, 0x02	; 2
 544:	80 83       	st	Z, r24
  // hardcoded exception for 57600 for compatibility with the bootloader
  // shipped with the Duemilanove and previous boards and the firmware
  // on the 8U2 on the Uno and Mega 2560. Also, The baud_setting cannot
  // be > 4095, so switch back to non-u2x mode if the baud rate is too
  // low.
  if (((F_CPU == 16000000UL) && (baud == 57600)) || (baud_setting >4095))
 546:	41 15       	cp	r20, r1
 548:	81 ee       	ldi	r24, 0xE1	; 225
 54a:	58 07       	cpc	r21, r24
 54c:	61 05       	cpc	r22, r1
 54e:	71 05       	cpc	r23, r1
 550:	a1 f0       	breq	.+40     	; 0x57a <_ZN14HardwareSerial5beginEmh+0x52>
// Public Methods //////////////////////////////////////////////////////////////

void HardwareSerial::begin(unsigned long baud, byte config)
{
  // Try u2x mode first
  uint16_t baud_setting = (F_CPU / 4 / baud - 1) / 2;
 552:	60 e0       	ldi	r22, 0x00	; 0
 554:	79 e0       	ldi	r23, 0x09	; 9
 556:	8d e3       	ldi	r24, 0x3D	; 61
 558:	90 e0       	ldi	r25, 0x00	; 0
 55a:	a7 01       	movw	r20, r14
 55c:	96 01       	movw	r18, r12
 55e:	0e 94 74 04 	call	0x8e8	; 0x8e8 <__udivmodsi4>
 562:	21 50       	subi	r18, 0x01	; 1
 564:	31 09       	sbc	r19, r1
 566:	41 09       	sbc	r20, r1
 568:	51 09       	sbc	r21, r1
 56a:	56 95       	lsr	r21
 56c:	47 95       	ror	r20
 56e:	37 95       	ror	r19
 570:	27 95       	ror	r18
  // hardcoded exception for 57600 for compatibility with the bootloader
  // shipped with the Duemilanove and previous boards and the firmware
  // on the 8U2 on the Uno and Mega 2560. Also, The baud_setting cannot
  // be > 4095, so switch back to non-u2x mode if the baud rate is too
  // low.
  if (((F_CPU == 16000000UL) && (baud == 57600)) || (baud_setting >4095))
 572:	21 15       	cp	r18, r1
 574:	80 e1       	ldi	r24, 0x10	; 16
 576:	38 07       	cpc	r19, r24
 578:	98 f0       	brcs	.+38     	; 0x5a0 <_ZN14HardwareSerial5beginEmh+0x78>
  {
    *_ucsra = 0;
 57a:	e8 89       	ldd	r30, Y+16	; 0x10
 57c:	f9 89       	ldd	r31, Y+17	; 0x11
 57e:	10 82       	st	Z, r1
    baud_setting = (F_CPU / 8 / baud - 1) / 2;
 580:	60 e8       	ldi	r22, 0x80	; 128
 582:	74 e8       	ldi	r23, 0x84	; 132
 584:	8e e1       	ldi	r24, 0x1E	; 30
 586:	90 e0       	ldi	r25, 0x00	; 0
 588:	a7 01       	movw	r20, r14
 58a:	96 01       	movw	r18, r12
 58c:	0e 94 74 04 	call	0x8e8	; 0x8e8 <__udivmodsi4>
 590:	21 50       	subi	r18, 0x01	; 1
 592:	31 09       	sbc	r19, r1
 594:	41 09       	sbc	r20, r1
 596:	51 09       	sbc	r21, r1
 598:	56 95       	lsr	r21
 59a:	47 95       	ror	r20
 59c:	37 95       	ror	r19
 59e:	27 95       	ror	r18
  }

  // assign the baud_setting, a.k.a. ubrr (USART Baud Rate Register)
  *_ubrrh = baud_setting >> 8;
 5a0:	ec 85       	ldd	r30, Y+12	; 0x0c
 5a2:	fd 85       	ldd	r31, Y+13	; 0x0d
 5a4:	30 83       	st	Z, r19
  *_ubrrl = baud_setting;
 5a6:	ee 85       	ldd	r30, Y+14	; 0x0e
 5a8:	ff 85       	ldd	r31, Y+15	; 0x0f
 5aa:	20 83       	st	Z, r18

  _written = false;
 5ac:	18 8e       	std	Y+24, r1	; 0x18

  //set the data bits, parity, and stop bits
#if defined(__AVR_ATmega8__)
  config |= 0x80; // select UCSRC register (shared with UBRRH)
#endif
  *_ucsrc = config;
 5ae:	ec 89       	ldd	r30, Y+20	; 0x14
 5b0:	fd 89       	ldd	r31, Y+21	; 0x15
 5b2:	b0 82       	st	Z, r11
  
  sbi(*_ucsrb, RXEN0);
 5b4:	ea 89       	ldd	r30, Y+18	; 0x12
 5b6:	fb 89       	ldd	r31, Y+19	; 0x13
 5b8:	80 81       	ld	r24, Z
 5ba:	80 61       	ori	r24, 0x10	; 16
 5bc:	80 83       	st	Z, r24
  sbi(*_ucsrb, TXEN0);
 5be:	ea 89       	ldd	r30, Y+18	; 0x12
 5c0:	fb 89       	ldd	r31, Y+19	; 0x13
 5c2:	80 81       	ld	r24, Z
 5c4:	88 60       	ori	r24, 0x08	; 8
 5c6:	80 83       	st	Z, r24
  sbi(*_ucsrb, RXCIE0);
 5c8:	ea 89       	ldd	r30, Y+18	; 0x12
 5ca:	fb 89       	ldd	r31, Y+19	; 0x13
 5cc:	80 81       	ld	r24, Z
 5ce:	80 68       	ori	r24, 0x80	; 128
 5d0:	80 83       	st	Z, r24
  cbi(*_ucsrb, UDRIE0);
 5d2:	ea 89       	ldd	r30, Y+18	; 0x12
 5d4:	fb 89       	ldd	r31, Y+19	; 0x13
 5d6:	80 81       	ld	r24, Z
 5d8:	8f 7d       	andi	r24, 0xDF	; 223
 5da:	80 83       	st	Z, r24
}
 5dc:	df 91       	pop	r29
 5de:	cf 91       	pop	r28
 5e0:	ff 90       	pop	r15
 5e2:	ef 90       	pop	r14
 5e4:	df 90       	pop	r13
 5e6:	cf 90       	pop	r12
 5e8:	bf 90       	pop	r11
 5ea:	08 95       	ret

000005ec <__vector_18>:
#elif defined(USART_RXC_vect)
  ISR(USART_RXC_vect) // ATmega8
#else
  #error "Don't know what the Data Received vector is called for Serial"
#endif
  {
 5ec:	1f 92       	push	r1
 5ee:	0f 92       	push	r0
 5f0:	0f b6       	in	r0, 0x3f	; 63
 5f2:	0f 92       	push	r0
 5f4:	11 24       	eor	r1, r1
 5f6:	2f 93       	push	r18
 5f8:	8f 93       	push	r24
 5fa:	9f 93       	push	r25
 5fc:	ef 93       	push	r30
 5fe:	ff 93       	push	r31

// Actual interrupt handlers //////////////////////////////////////////////////////////////

void HardwareSerial::_rx_complete_irq(void)
{
  if (bit_is_clear(*_ucsra, UPE0)) {
 600:	e0 91 02 02 	lds	r30, 0x0202
 604:	f0 91 03 02 	lds	r31, 0x0203
 608:	80 81       	ld	r24, Z
 60a:	e0 91 08 02 	lds	r30, 0x0208
 60e:	f0 91 09 02 	lds	r31, 0x0209
 612:	82 fd       	sbrc	r24, 2
 614:	12 c0       	rjmp	.+36     	; 0x63a <__vector_18+0x4e>
    // No Parity error, read byte and store it in the buffer if there is
    // room
    unsigned char c = *_udr;
 616:	90 81       	ld	r25, Z
    rx_buffer_index_t i = (unsigned int)(_rx_buffer_head + 1) % SERIAL_RX_BUFFER_SIZE;
 618:	80 91 0b 02 	lds	r24, 0x020B
 61c:	8f 5f       	subi	r24, 0xFF	; 255
 61e:	8f 73       	andi	r24, 0x3F	; 63

    // if we should be storing the received character into the location
    // just before the tail (meaning that the head would advance to the
    // current location of the tail), we're about to overflow the buffer
    // and so we don't write the character or advance the head.
    if (i != _rx_buffer_tail) {
 620:	20 91 0c 02 	lds	r18, 0x020C
 624:	82 17       	cp	r24, r18
 626:	51 f0       	breq	.+20     	; 0x63c <__vector_18+0x50>
      _rx_buffer[_rx_buffer_head] = c;
 628:	e0 91 0b 02 	lds	r30, 0x020B
 62c:	f0 e0       	ldi	r31, 0x00	; 0
 62e:	ee 50       	subi	r30, 0x0E	; 14
 630:	fe 4f       	sbci	r31, 0xFE	; 254
 632:	95 8f       	std	Z+29, r25	; 0x1d
      _rx_buffer_head = i;
 634:	80 93 0b 02 	sts	0x020B, r24
 638:	01 c0       	rjmp	.+2      	; 0x63c <__vector_18+0x50>
    }
  } else {
    // Parity error, read byte but discard it
    *_udr;
 63a:	80 81       	ld	r24, Z
    Serial._rx_complete_irq();
  }
 63c:	ff 91       	pop	r31
 63e:	ef 91       	pop	r30
 640:	9f 91       	pop	r25
 642:	8f 91       	pop	r24
 644:	2f 91       	pop	r18
 646:	0f 90       	pop	r0
 648:	0f be       	out	0x3f, r0	; 63
 64a:	0f 90       	pop	r0
 64c:	1f 90       	pop	r1
 64e:	18 95       	reti

00000650 <__vector_19>:
#elif defined(USART_UDRE_vect)
ISR(USART_UDRE_vect)
#else
  #error "Don't know what the Data Register Empty vector is called for Serial"
#endif
{
 650:	1f 92       	push	r1
 652:	0f 92       	push	r0
 654:	0f b6       	in	r0, 0x3f	; 63
 656:	0f 92       	push	r0
 658:	11 24       	eor	r1, r1
 65a:	2f 93       	push	r18
 65c:	3f 93       	push	r19
 65e:	4f 93       	push	r20
 660:	5f 93       	push	r21
 662:	6f 93       	push	r22
 664:	7f 93       	push	r23
 666:	8f 93       	push	r24
 668:	9f 93       	push	r25
 66a:	af 93       	push	r26
 66c:	bf 93       	push	r27
 66e:	ef 93       	push	r30
 670:	ff 93       	push	r31
  Serial._tx_udr_empty_irq();
 672:	82 ef       	ldi	r24, 0xF2	; 242
 674:	91 e0       	ldi	r25, 0x01	; 1
 676:	0e 94 ec 01 	call	0x3d8	; 0x3d8 <_ZN14HardwareSerial17_tx_udr_empty_irqEv>
}
 67a:	ff 91       	pop	r31
 67c:	ef 91       	pop	r30
 67e:	bf 91       	pop	r27
 680:	af 91       	pop	r26
 682:	9f 91       	pop	r25
 684:	8f 91       	pop	r24
 686:	7f 91       	pop	r23
 688:	6f 91       	pop	r22
 68a:	5f 91       	pop	r21
 68c:	4f 91       	pop	r20
 68e:	3f 91       	pop	r19
 690:	2f 91       	pop	r18
 692:	0f 90       	pop	r0
 694:	0f be       	out	0x3f, r0	; 63
 696:	0f 90       	pop	r0
 698:	1f 90       	pop	r1
 69a:	18 95       	reti

0000069c <_Z17Serial0_availablev>:
#endif

// Function that can be weakly referenced by serialEventRun to prevent
// pulling in this file if it's not otherwise used.
bool Serial0_available() {
  return Serial.available();
 69c:	82 ef       	ldi	r24, 0xF2	; 242
 69e:	91 e0       	ldi	r25, 0x01	; 1
 6a0:	0e 94 b1 01 	call	0x362	; 0x362 <_ZN14HardwareSerial9availableEv>
 6a4:	21 e0       	ldi	r18, 0x01	; 1
 6a6:	89 2b       	or	r24, r25
 6a8:	09 f4       	brne	.+2      	; 0x6ac <_Z17Serial0_availablev+0x10>
 6aa:	20 e0       	ldi	r18, 0x00	; 0
}
 6ac:	82 2f       	mov	r24, r18
 6ae:	08 95       	ret

000006b0 <_GLOBAL__sub_I___vector_18>:
    size_t printNumber(unsigned long, uint8_t);
    size_t printFloat(double, uint8_t);
  protected:
    void setWriteError(int err = 1) { write_error = err; }
  public:
    Print() : write_error(0) {}
 6b0:	10 92 f5 01 	sts	0x01F5, r1
 6b4:	10 92 f4 01 	sts	0x01F4, r1
    virtual int available() = 0;
    virtual int read() = 0;
    virtual int peek() = 0;
    virtual void flush() = 0;

    Stream() {_timeout=1000;}
 6b8:	88 ee       	ldi	r24, 0xE8	; 232
 6ba:	93 e0       	ldi	r25, 0x03	; 3
 6bc:	a0 e0       	ldi	r26, 0x00	; 0
 6be:	b0 e0       	ldi	r27, 0x00	; 0
 6c0:	80 93 f6 01 	sts	0x01F6, r24
 6c4:	90 93 f7 01 	sts	0x01F7, r25
 6c8:	a0 93 f8 01 	sts	0x01F8, r26
 6cc:	b0 93 f9 01 	sts	0x01F9, r27
  volatile uint8_t *ucsrc, volatile uint8_t *udr) :
    _ubrrh(ubrrh), _ubrrl(ubrrl),
    _ucsra(ucsra), _ucsrb(ucsrb), _ucsrc(ucsrc),
    _udr(udr),
    _rx_buffer_head(0), _rx_buffer_tail(0),
    _tx_buffer_head(0), _tx_buffer_tail(0)
 6d0:	8a e0       	ldi	r24, 0x0A	; 10
 6d2:	91 e0       	ldi	r25, 0x01	; 1
 6d4:	90 93 f3 01 	sts	0x01F3, r25
 6d8:	80 93 f2 01 	sts	0x01F2, r24
 6dc:	85 ec       	ldi	r24, 0xC5	; 197
 6de:	90 e0       	ldi	r25, 0x00	; 0
 6e0:	90 93 ff 01 	sts	0x01FF, r25
 6e4:	80 93 fe 01 	sts	0x01FE, r24
 6e8:	84 ec       	ldi	r24, 0xC4	; 196
 6ea:	90 e0       	ldi	r25, 0x00	; 0
 6ec:	90 93 01 02 	sts	0x0201, r25
 6f0:	80 93 00 02 	sts	0x0200, r24
 6f4:	80 ec       	ldi	r24, 0xC0	; 192
 6f6:	90 e0       	ldi	r25, 0x00	; 0
 6f8:	90 93 03 02 	sts	0x0203, r25
 6fc:	80 93 02 02 	sts	0x0202, r24
 700:	81 ec       	ldi	r24, 0xC1	; 193
 702:	90 e0       	ldi	r25, 0x00	; 0
 704:	90 93 05 02 	sts	0x0205, r25
 708:	80 93 04 02 	sts	0x0204, r24
 70c:	82 ec       	ldi	r24, 0xC2	; 194
 70e:	90 e0       	ldi	r25, 0x00	; 0
 710:	90 93 07 02 	sts	0x0207, r25
 714:	80 93 06 02 	sts	0x0206, r24
 718:	86 ec       	ldi	r24, 0xC6	; 198
 71a:	90 e0       	ldi	r25, 0x00	; 0
 71c:	90 93 09 02 	sts	0x0209, r25
 720:	80 93 08 02 	sts	0x0208, r24
 724:	10 92 0b 02 	sts	0x020B, r1
 728:	10 92 0c 02 	sts	0x020C, r1
 72c:	10 92 0d 02 	sts	0x020D, r1
 730:	10 92 0e 02 	sts	0x020E, r1
 734:	08 95       	ret

00000736 <_ZN5Print5writeEPKhj>:

// Public Methods //////////////////////////////////////////////////////////////

/* default implementation: may be overridden */
size_t Print::write(const uint8_t *buffer, size_t size)
{
 736:	cf 92       	push	r12
 738:	df 92       	push	r13
 73a:	ef 92       	push	r14
 73c:	ff 92       	push	r15
 73e:	0f 93       	push	r16
 740:	1f 93       	push	r17
 742:	cf 93       	push	r28
 744:	df 93       	push	r29
 746:	7c 01       	movw	r14, r24
 748:	6a 01       	movw	r12, r20
 74a:	eb 01       	movw	r28, r22
  size_t n = 0;
 74c:	00 e0       	ldi	r16, 0x00	; 0
 74e:	10 e0       	ldi	r17, 0x00	; 0
  while (size--) {
 750:	0c 15       	cp	r16, r12
 752:	1d 05       	cpc	r17, r13
 754:	71 f0       	breq	.+28     	; 0x772 <_ZN5Print5writeEPKhj+0x3c>
    if (write(*buffer++)) n++;
 756:	69 91       	ld	r22, Y+
 758:	d7 01       	movw	r26, r14
 75a:	ed 91       	ld	r30, X+
 75c:	fc 91       	ld	r31, X
 75e:	01 90       	ld	r0, Z+
 760:	f0 81       	ld	r31, Z
 762:	e0 2d       	mov	r30, r0
 764:	c7 01       	movw	r24, r14
 766:	09 95       	icall
 768:	89 2b       	or	r24, r25
 76a:	19 f0       	breq	.+6      	; 0x772 <_ZN5Print5writeEPKhj+0x3c>
 76c:	0f 5f       	subi	r16, 0xFF	; 255
 76e:	1f 4f       	sbci	r17, 0xFF	; 255
 770:	ef cf       	rjmp	.-34     	; 0x750 <_ZN5Print5writeEPKhj+0x1a>
    else break;
  }
  return n;
}
 772:	c8 01       	movw	r24, r16
 774:	df 91       	pop	r29
 776:	cf 91       	pop	r28
 778:	1f 91       	pop	r17
 77a:	0f 91       	pop	r16
 77c:	ff 90       	pop	r15
 77e:	ef 90       	pop	r14
 780:	df 90       	pop	r13
 782:	cf 90       	pop	r12
 784:	08 95       	ret

00000786 <_ZN5Print5writeEPKc>:
    int getWriteError() { return write_error; }
    void clearWriteError() { setWriteError(0); }
  
    virtual size_t write(uint8_t) = 0;
    size_t write(const char *str) {
      if (str == NULL) return 0;
 786:	61 15       	cp	r22, r1
 788:	71 05       	cpc	r23, r1
 78a:	81 f0       	breq	.+32     	; 0x7ac <_ZN5Print5writeEPKc+0x26>
      return write((const uint8_t *)str, strlen(str));
 78c:	db 01       	movw	r26, r22
 78e:	0d 90       	ld	r0, X+
 790:	00 20       	and	r0, r0
 792:	e9 f7       	brne	.-6      	; 0x78e <_ZN5Print5writeEPKc+0x8>
 794:	ad 01       	movw	r20, r26
 796:	41 50       	subi	r20, 0x01	; 1
 798:	51 09       	sbc	r21, r1
 79a:	46 1b       	sub	r20, r22
 79c:	57 0b       	sbc	r21, r23
 79e:	dc 01       	movw	r26, r24
 7a0:	ed 91       	ld	r30, X+
 7a2:	fc 91       	ld	r31, X
 7a4:	02 80       	ldd	r0, Z+2	; 0x02
 7a6:	f3 81       	ldd	r31, Z+3	; 0x03
 7a8:	e0 2d       	mov	r30, r0
 7aa:	09 94       	ijmp
    }
 7ac:	80 e0       	ldi	r24, 0x00	; 0
 7ae:	90 e0       	ldi	r25, 0x00	; 0
 7b0:	08 95       	ret

000007b2 <_ZN5Print5printEPKc>:
  return write(s.c_str(), s.length());
}

size_t Print::print(const char str[])
{
  return write(str);
 7b2:	0c 94 c3 03 	jmp	0x786	; 0x786 <_ZN5Print5writeEPKc>

000007b6 <_ZN5Print7printlnEv>:
  return x.printTo(*this);
}

size_t Print::println(void)
{
  return write("\r\n");
 7b6:	66 e1       	ldi	r22, 0x16	; 22
 7b8:	71 e0       	ldi	r23, 0x01	; 1
 7ba:	0c 94 c3 03 	jmp	0x786	; 0x786 <_ZN5Print5writeEPKc>

000007be <initVariant>:
int atexit(void (* /*func*/ )()) { return 0; }

// Weak empty variant initialization function.
// May be redefined by variant files.
void initVariant() __attribute__((weak));
void initVariant() { }
 7be:	08 95       	ret

000007c0 <main>:
void setupUSB() __attribute__((weak));
void setupUSB() { }

int main(void)
{
	init();
 7c0:	0e 94 39 04 	call	0x872	; 0x872 <init>

	initVariant();
 7c4:	0e 94 df 03 	call	0x7be	; 0x7be <initVariant>

#if defined(USBCON)
	USBDevice.attach();
#endif
	
	setup();
 7c8:	0e 94 8c 00 	call	0x118	; 0x118 <setup>
    
	for (;;) {
		loop();
		if (serialEventRun) serialEventRun();
 7cc:	ce ed       	ldi	r28, 0xDE	; 222
 7ce:	d1 e0       	ldi	r29, 0x01	; 1
#endif
	
	setup();
    
	for (;;) {
		loop();
 7d0:	0e 94 c9 00 	call	0x192	; 0x192 <loop>
		if (serialEventRun) serialEventRun();
 7d4:	20 97       	sbiw	r28, 0x00	; 0
 7d6:	e1 f3       	breq	.-8      	; 0x7d0 <main+0x10>
 7d8:	0e 94 de 01 	call	0x3bc	; 0x3bc <_Z14serialEventRunv>
 7dc:	f9 cf       	rjmp	.-14     	; 0x7d0 <main+0x10>

000007de <__vector_16>:
#if defined(__AVR_ATtiny24__) || defined(__AVR_ATtiny44__) || defined(__AVR_ATtiny84__)
ISR(TIM0_OVF_vect)
#else
ISR(TIMER0_OVF_vect)
#endif
{
 7de:	1f 92       	push	r1
 7e0:	0f 92       	push	r0
 7e2:	0f b6       	in	r0, 0x3f	; 63
 7e4:	0f 92       	push	r0
 7e6:	11 24       	eor	r1, r1
 7e8:	2f 93       	push	r18
 7ea:	3f 93       	push	r19
 7ec:	8f 93       	push	r24
 7ee:	9f 93       	push	r25
 7f0:	af 93       	push	r26
 7f2:	bf 93       	push	r27
	// copy these to local variables so they can be stored in registers
	// (volatile variables must be read from memory on every access)
	unsigned long m = timer0_millis;
 7f4:	80 91 90 02 	lds	r24, 0x0290
 7f8:	90 91 91 02 	lds	r25, 0x0291
 7fc:	a0 91 92 02 	lds	r26, 0x0292
 800:	b0 91 93 02 	lds	r27, 0x0293
	unsigned char f = timer0_fract;
 804:	30 91 8f 02 	lds	r19, 0x028F

	m += MILLIS_INC;
	f += FRACT_INC;
 808:	23 e0       	ldi	r18, 0x03	; 3
 80a:	23 0f       	add	r18, r19
	if (f >= FRACT_MAX) {
 80c:	2d 37       	cpi	r18, 0x7D	; 125
 80e:	20 f4       	brcc	.+8      	; 0x818 <__vector_16+0x3a>
	// copy these to local variables so they can be stored in registers
	// (volatile variables must be read from memory on every access)
	unsigned long m = timer0_millis;
	unsigned char f = timer0_fract;

	m += MILLIS_INC;
 810:	01 96       	adiw	r24, 0x01	; 1
 812:	a1 1d       	adc	r26, r1
 814:	b1 1d       	adc	r27, r1
 816:	05 c0       	rjmp	.+10     	; 0x822 <__vector_16+0x44>
	f += FRACT_INC;
	if (f >= FRACT_MAX) {
		f -= FRACT_MAX;
 818:	26 e8       	ldi	r18, 0x86	; 134
 81a:	23 0f       	add	r18, r19
		m += 1;
 81c:	02 96       	adiw	r24, 0x02	; 2
 81e:	a1 1d       	adc	r26, r1
 820:	b1 1d       	adc	r27, r1
	}

	timer0_fract = f;
 822:	20 93 8f 02 	sts	0x028F, r18
	timer0_millis = m;
 826:	80 93 90 02 	sts	0x0290, r24
 82a:	90 93 91 02 	sts	0x0291, r25
 82e:	a0 93 92 02 	sts	0x0292, r26
 832:	b0 93 93 02 	sts	0x0293, r27
	timer0_overflow_count++;
 836:	80 91 94 02 	lds	r24, 0x0294
 83a:	90 91 95 02 	lds	r25, 0x0295
 83e:	a0 91 96 02 	lds	r26, 0x0296
 842:	b0 91 97 02 	lds	r27, 0x0297
 846:	01 96       	adiw	r24, 0x01	; 1
 848:	a1 1d       	adc	r26, r1
 84a:	b1 1d       	adc	r27, r1
 84c:	80 93 94 02 	sts	0x0294, r24
 850:	90 93 95 02 	sts	0x0295, r25
 854:	a0 93 96 02 	sts	0x0296, r26
 858:	b0 93 97 02 	sts	0x0297, r27
}
 85c:	bf 91       	pop	r27
 85e:	af 91       	pop	r26
 860:	9f 91       	pop	r25
 862:	8f 91       	pop	r24
 864:	3f 91       	pop	r19
 866:	2f 91       	pop	r18
 868:	0f 90       	pop	r0
 86a:	0f be       	out	0x3f, r0	; 63
 86c:	0f 90       	pop	r0
 86e:	1f 90       	pop	r1
 870:	18 95       	reti

00000872 <init>:

void init()
{
	// this needs to be called before setup() or some functions won't
	// work there
	sei();
 872:	78 94       	sei
	
	// on the ATmega168, timer 0 is also used for fast hardware pwm
	// (using phase-correct PWM would mean that timer 0 overflowed half as often
	// resulting in different millis() behavior on the ATmega8 and ATmega168)
#if defined(TCCR0A) && defined(WGM01)
	sbi(TCCR0A, WGM01);
 874:	84 b5       	in	r24, 0x24	; 36
 876:	82 60       	ori	r24, 0x02	; 2
 878:	84 bd       	out	0x24, r24	; 36
	sbi(TCCR0A, WGM00);
 87a:	84 b5       	in	r24, 0x24	; 36
 87c:	81 60       	ori	r24, 0x01	; 1
 87e:	84 bd       	out	0x24, r24	; 36
	// this combination is for the standard atmega8
	sbi(TCCR0, CS01);
	sbi(TCCR0, CS00);
#elif defined(TCCR0B) && defined(CS01) && defined(CS00)
	// this combination is for the standard 168/328/1280/2560
	sbi(TCCR0B, CS01);
 880:	85 b5       	in	r24, 0x25	; 37
 882:	82 60       	ori	r24, 0x02	; 2
 884:	85 bd       	out	0x25, r24	; 37
	sbi(TCCR0B, CS00);
 886:	85 b5       	in	r24, 0x25	; 37
 888:	81 60       	ori	r24, 0x01	; 1
 88a:	85 bd       	out	0x25, r24	; 37

	// enable timer 0 overflow interrupt
#if defined(TIMSK) && defined(TOIE0)
	sbi(TIMSK, TOIE0);
#elif defined(TIMSK0) && defined(TOIE0)
	sbi(TIMSK0, TOIE0);
 88c:	ee e6       	ldi	r30, 0x6E	; 110
 88e:	f0 e0       	ldi	r31, 0x00	; 0
 890:	80 81       	ld	r24, Z
 892:	81 60       	ori	r24, 0x01	; 1
 894:	80 83       	st	Z, r24
	// this is better for motors as it ensures an even waveform
	// note, however, that fast pwm mode can achieve a frequency of up
	// 8 MHz (with a 16 MHz clock) at 50% duty cycle

#if defined(TCCR1B) && defined(CS11) && defined(CS10)
	TCCR1B = 0;
 896:	e1 e8       	ldi	r30, 0x81	; 129
 898:	f0 e0       	ldi	r31, 0x00	; 0
 89a:	10 82       	st	Z, r1

	// set timer 1 prescale factor to 64
	sbi(TCCR1B, CS11);
 89c:	80 81       	ld	r24, Z
 89e:	82 60       	ori	r24, 0x02	; 2
 8a0:	80 83       	st	Z, r24
#if F_CPU >= 8000000L
	sbi(TCCR1B, CS10);
 8a2:	80 81       	ld	r24, Z
 8a4:	81 60       	ori	r24, 0x01	; 1
 8a6:	80 83       	st	Z, r24
	sbi(TCCR1, CS10);
#endif
#endif
	// put timer 1 in 8-bit phase correct pwm mode
#if defined(TCCR1A) && defined(WGM10)
	sbi(TCCR1A, WGM10);
 8a8:	e0 e8       	ldi	r30, 0x80	; 128
 8aa:	f0 e0       	ldi	r31, 0x00	; 0
 8ac:	80 81       	ld	r24, Z
 8ae:	81 60       	ori	r24, 0x01	; 1
 8b0:	80 83       	st	Z, r24

	// set timer 2 prescale factor to 64
#if defined(TCCR2) && defined(CS22)
	sbi(TCCR2, CS22);
#elif defined(TCCR2B) && defined(CS22)
	sbi(TCCR2B, CS22);
 8b2:	e1 eb       	ldi	r30, 0xB1	; 177
 8b4:	f0 e0       	ldi	r31, 0x00	; 0
 8b6:	80 81       	ld	r24, Z
 8b8:	84 60       	ori	r24, 0x04	; 4
 8ba:	80 83       	st	Z, r24

	// configure timer 2 for phase correct pwm (8-bit)
#if defined(TCCR2) && defined(WGM20)
	sbi(TCCR2, WGM20);
#elif defined(TCCR2A) && defined(WGM20)
	sbi(TCCR2A, WGM20);
 8bc:	e0 eb       	ldi	r30, 0xB0	; 176
 8be:	f0 e0       	ldi	r31, 0x00	; 0
 8c0:	80 81       	ld	r24, Z
 8c2:	81 60       	ori	r24, 0x01	; 1
 8c4:	80 83       	st	Z, r24
#endif

#if defined(ADCSRA)
	// set a2d prescaler so we are inside the desired 50-200 KHz range.
	#if F_CPU >= 16000000 // 16 MHz / 128 = 125 KHz
		sbi(ADCSRA, ADPS2);
 8c6:	ea e7       	ldi	r30, 0x7A	; 122
 8c8:	f0 e0       	ldi	r31, 0x00	; 0
 8ca:	80 81       	ld	r24, Z
 8cc:	84 60       	ori	r24, 0x04	; 4
 8ce:	80 83       	st	Z, r24
		sbi(ADCSRA, ADPS1);
 8d0:	80 81       	ld	r24, Z
 8d2:	82 60       	ori	r24, 0x02	; 2
 8d4:	80 83       	st	Z, r24
		sbi(ADCSRA, ADPS0);
 8d6:	80 81       	ld	r24, Z
 8d8:	81 60       	ori	r24, 0x01	; 1
 8da:	80 83       	st	Z, r24
		cbi(ADCSRA, ADPS2);
		cbi(ADCSRA, ADPS1);
		sbi(ADCSRA, ADPS0);
	#endif
	// enable a2d conversions
	sbi(ADCSRA, ADEN);
 8dc:	80 81       	ld	r24, Z
 8de:	80 68       	ori	r24, 0x80	; 128
 8e0:	80 83       	st	Z, r24
	// here so they can be used as normal digital i/o; they will be
	// reconnected in Serial.begin()
#if defined(UCSRB)
	UCSRB = 0;
#elif defined(UCSR0B)
	UCSR0B = 0;
 8e2:	10 92 c1 00 	sts	0x00C1, r1
 8e6:	08 95       	ret

000008e8 <__udivmodsi4>:
 8e8:	a1 e2       	ldi	r26, 0x21	; 33
 8ea:	1a 2e       	mov	r1, r26
 8ec:	aa 1b       	sub	r26, r26
 8ee:	bb 1b       	sub	r27, r27
 8f0:	fd 01       	movw	r30, r26
 8f2:	0d c0       	rjmp	.+26     	; 0x90e <__udivmodsi4_ep>

000008f4 <__udivmodsi4_loop>:
 8f4:	aa 1f       	adc	r26, r26
 8f6:	bb 1f       	adc	r27, r27
 8f8:	ee 1f       	adc	r30, r30
 8fa:	ff 1f       	adc	r31, r31
 8fc:	a2 17       	cp	r26, r18
 8fe:	b3 07       	cpc	r27, r19
 900:	e4 07       	cpc	r30, r20
 902:	f5 07       	cpc	r31, r21
 904:	20 f0       	brcs	.+8      	; 0x90e <__udivmodsi4_ep>
 906:	a2 1b       	sub	r26, r18
 908:	b3 0b       	sbc	r27, r19
 90a:	e4 0b       	sbc	r30, r20
 90c:	f5 0b       	sbc	r31, r21

0000090e <__udivmodsi4_ep>:
 90e:	66 1f       	adc	r22, r22
 910:	77 1f       	adc	r23, r23
 912:	88 1f       	adc	r24, r24
 914:	99 1f       	adc	r25, r25
 916:	1a 94       	dec	r1
 918:	69 f7       	brne	.-38     	; 0x8f4 <__udivmodsi4_loop>
 91a:	60 95       	com	r22
 91c:	70 95       	com	r23
 91e:	80 95       	com	r24
 920:	90 95       	com	r25
 922:	9b 01       	movw	r18, r22
 924:	ac 01       	movw	r20, r24
 926:	bd 01       	movw	r22, r26
 928:	cf 01       	movw	r24, r30
 92a:	08 95       	ret

0000092c <__tablejump2__>:
 92c:	ee 0f       	add	r30, r30
 92e:	ff 1f       	adc	r31, r31

00000930 <__tablejump__>:
 930:	05 90       	lpm	r0, Z+
 932:	f4 91       	lpm	r31, Z
 934:	e0 2d       	mov	r30, r0
 936:	09 94       	ijmp

00000938 <_exit>:
 938:	f8 94       	cli

0000093a <__stop_program>:
 93a:	ff cf       	rjmp	.-2      	; 0x93a <__stop_program>
