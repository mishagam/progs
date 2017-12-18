unit Unit1;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, FileUtil, Forms, Controls, Graphics, Dialogs, StdCtrls,
  ExtCtrls, Menus, Windows;

type

  { TForm1 }

  TForm1 = class(TForm)
    Button1: TButton;
    Button2: TButton;
    Edit1: TEdit;
    Edit2: TEdit;
    Edit3: TEdit;
    Edit4: TEdit;
    Edit5: TEdit;
    Label1: TLabel;
    Label3: TLabel;
    Label4: TLabel;
    MainMenu1: TMainMenu;
    MenuItem1: TMenuItem;
    MenuItem10: TMenuItem;
    MenuItem11: TMenuItem;
    MenuItem12: TMenuItem;
    MenuItem13: TMenuItem;
    MenuItem14: TMenuItem;
    MenuItem2: TMenuItem;
    MenuItem3: TMenuItem;
    MenuItem4: TMenuItem;
    MenuItem5: TMenuItem;
    MenuItem6: TMenuItem;
    MenuItem7: TMenuItem;
    MenuItem8: TMenuItem;
    MenuItem9: TMenuItem;
    OpenDialog1: TOpenDialog;
    SaveDialog1: TSaveDialog;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure FormActivate(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure FormMouseDown(Sender: TObject; Button: TMouseButton;
      Shift: TShiftState; X, Y: Integer);
    procedure MenuItem10Click(Sender: TObject);
    procedure MenuItem11Click(Sender: TObject);
    procedure MenuItem12Click(Sender: TObject);
    procedure MenuItem13Click(Sender: TObject);
    procedure MenuItem14Click(Sender: TObject);
    procedure MenuItem5Click(Sender: TObject);
    procedure MenuItem6Click(Sender: TObject);
    procedure MenuItem7Click(Sender: TObject);
    procedure MenuItem8Click(Sender: TObject);
    procedure MenuItem9Click(Sender: TObject);
  private
    { private declarations }
  public
    { public declarations }
  end;

var
  Form1: TForm1;
  n,k,r:integer;
  a:array [1..20,1..20] of byte;
  p:array [1..20] of boolean;
  coord: array [1..20] of record x,y:integer; end;
implementation

{$R *.lfm}

{ TForm1 }

procedure rebro(t:tcolor);
var i,j:integer;
begin
  form1.canvas.pen.color:=t;
  form1.canvas.textout(coord[k].x+6,coord[k].y+6,inttostr(k));
  form1.canvas.Brush.color:=$ffffff;
  form1.canvas.Ellipse(coord[k].x-5,coord[k].y-5,coord[k].x+5,coord[k].y+5);
end;

procedure rebro2();
var i,j:integer;
begin
  form1.canvas.pen.color:=$000000;
  for i:=1 to n do
    for j:=1 to n-i do
      if a[i,j] = 1 then    begin
         Form1.canvas.MoveTo(coord[i].x,coord[i].y);
         Form1.canvas.LineTo(coord[j].x,coord[j].y);
      end;

end;

procedure TForm1.FormActivate(Sender: TObject);
var i:integer;
begin
  k:=0;
  for i:=1 to n do a[i,i]:=0;
  form1.canvas.Brush.color:=$ffffff;
end;

procedure TForm1.FormCreate(Sender: TObject);
begin

end;

procedure TForm1.Button1Click(Sender: TObject);
var i,j:integer;
begin
   i:=strtoint(edit2.text);
   j:=strtoint(edit3.text);
   canvas.MoveTo(coord[i].x,coord[i].y);
   canvas.LineTo(coord[j].x,coord[j].y);
   for k:=1 to n do rebro($000000);
   for k:=1 to n do rebro2();
   a[i,j]:=1;
   a[j,i]:=1;
end;

procedure TForm1.Button2Click(Sender: TObject);
var i,j:integer;
begin
   i:=strtoint(edit2.text);
   j:=strtoint(edit3.text);
   canvas.pen.color:=clMoneyGreen;
   canvas.MoveTo(coord[i].x,coord[i].y);
   canvas.LineTo(coord[j].x,coord[j].y);
   for k:=1 to n do rebro($000000);
   a[i,j]:=0;
   a[j,i]:=0;
end;



procedure TForm1.FormMouseDown(Sender: TObject; Button: TMouseButton;
  Shift: TShiftState; X, Y: Integer);
begin
  inc(k);
  n:=strtoint(edit1.text);
  if k<=n then begin
    canvas.Ellipse(x-5,y-5,x+5,y+5);
    canvas.textout(x+6,y+6,inttostr(k));
    coord[k].x:=x;
    coord[k].y:=y;
  end;
end;

procedure TForm1.MenuItem10Click(Sender: TObject);
var Q:array[1..20] of integer;
  e,b,i,v:integer;
begin
  for i:=1 to n do p[i]:=true;
  v:=strtoint(Edit4.Text);
  Edit5.Text:='';
  b:=0;
  e:=1;
  Q[e]:=v;
  p[v]:=false;
  While b<e do begin
   inc(b);
   for i:=1 to n do
     if (a[q[b],i]=1) and p[i] then begin
       inc(e);
       Q[e]:=i;
       p[i]:=false;
     end;
  end;
  for i:=1 to e do
    Edit5.Text:=Edit5.Text+inttostr(q[i])+' ';
end;

procedure TForm1.MenuItem11Click(Sender: TObject);
var count,i,u,min,m:integer;
  dist:array[1..25] of integer;
  visited:array[1..25] of boolean;
begin
  m:=strtoint(Edit4.Text);
  Edit5.Text:='';
  //qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
  for i:=1 to n do begin
    dist[i]:=maxint;
    visited[i]:=true;
  end;

  dist[m]:=0;

  for i:=1 to n do
    if a[m,i]>0 then dist[i]:=a[m,i];
  visited[m]:=false;

  min:=0;

  while min<>maxint do begin
   min:=maxint;
   for i:=1 to n do
     if (dist[i]<min) and visited[i] then begin
       min:=dist[i];
       u:=i;
     end;

   if min<>maxint then begin

    for i:=1 to n do
       if visited[i] and (a[u,i]>0) and (dist[u]+a[u,i]<dist[i])
      then dist[i]:=dist[u]+a[u,i];
    visited[u]:=false;
   end;
  end;

  for i:=1 to n do   begin
if (dist[i]<>maxint) and (dist[i]>0) then
Edit5.Text:=Edit5.Text+inttostr(i)+':'+inttostr(dist[i])+' ';
//else writeln(m,' > ', i,' = ', 'нет пути');

end;

end;

procedure TForm1.MenuItem12Click(Sender: TObject);
begin
  MessageBox(handle,Pchar(utf8tosys('Программа, позволяющая создавать графы, а так же взаимодействовать с ними.'+#13+'04.04.15')),Pchar(utf8tosys('О программе')), mb_OK);

end;

procedure TForm1.MenuItem13Click(Sender: TObject);
begin
  MessageBox(handle,Pchar(utf8tosys('Автор - Серёжа Гамбарян (Imora)' +#13+ 'Электронная почта - sgamb2000@gmail.com ')),Pchar(utf8tosys('Об авторе')), mb_OK);
end;

procedure TForm1.MenuItem14Click(Sender: TObject);
var q,j,k:integer;
begin
  k:=0;
  q:=strtoint(Edit4.Text) ;

  for j:=1 to n do if a[q,j] = 1 then inc(k);

  Edit5.Text:=inttostr(k);
end;

procedure TForm1.MenuItem5Click(Sender: TObject);
var i,j:integer;
begin
  Edit4.Text:='';
  Edit5.Text:='';
  for i:=1 to n do
      for j:=1 to n do a[i,j]:=0;
  Edit1.Text:='';
  Edit2.Text:='';
  Edit3.Text:='';
  Form1.Refresh;
  n:=0;
  k:=0;
end;

procedure TForm1.MenuItem6Click(Sender: TObject);
var f:text;
  i,j:integer;
begin
  Edit4.Text:='';
  Edit5.Text:='';
  Form1.Refresh;
  k:=0;
  if OpenDialog1.Execute then begin
   // caption:=openDialog1.FileName;
  assignfile(f,utf8tosys(opendialog1.Filename));
 // assignfile(f,opendialog1.Filename);
  reset(f);
  readln(f,n);
  for i:=1 to n do readln(f,coord[i].x,coord[i].y);
    for i:=1 to n do begin
        for j:=1 to n do read(f,a[i,j]);
           readln(f);
            end;
  closefile(f);
  end;

  Edit1.Text:=inttostr(n);

   for i:=1 to n do
     for j:=i to n do
       if a[i,j] = 1 then begin
       canvas.MoveTo(coord[i].x,coord[i].y);
       canvas.LineTo(coord[j].x,coord[j].y);
       end;

  for i:=1 to n do begin
   inc(k);
   if k<=n then begin
   canvas.Ellipse(coord[k].x-5,coord[k].y-5,coord[k].x+5,coord[k].y+5);
   canvas.textout(coord[k].x+6,coord[k].y+6,inttostr(k));
   end;
end;
  end;


procedure TForm1.MenuItem7Click(Sender: TObject);
var f:text;
    i,j:integer;
begin
  if SaveDialog1.Execute then begin
  assignfile(f,utf8tosys(savedialog1.Filename));
         rewrite(f);
         writeln(f,n);
         for i:=1 to n do
           writeln(f,coord[i].x,' ',coord[i].y);
         for i:=1 to n do begin
           for j:=1 to n do
             write(f,a[i,j],' ');
           writeln(f);
         end;
        closefile(f);
   end;
end;

procedure TForm1.MenuItem8Click(Sender: TObject);
begin
  Form1.Close;
end;

procedure Og(v:integer);
var i:integer;
begin
  Form1.Edit5.Text:=Form1.Edit5.Text+inttostr(v)+' ';
  p[v]:=false;
  for i:=1 to n do
    if (a[v,i]=1) and p[i] then Og(i);
end;



procedure TForm1.MenuItem9Click(Sender: TObject);
var i,v:integer;
begin
  for i:=1 to n do p[i]:=true;
  v:=strtoint(Edit4.Text);
  Edit5.Text:='';
  Og(v);
end;

end.

