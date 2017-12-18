/* Календарь Планета */

$(function(){

	$.fn.planeta_calendar = function(arguments) {

		var c = this;
		var months = {
			'0':'Январь',
			'1':'Февраль',
			'2':'Март',
			'3':'Апрель',
			'4':'Май',
			'5':'Июнь',
			'6':'Июль',
			'7':'Август',
			'8':'Сентябрь',
			'9':'Октябрь',
			'10':'Ноябрь',
			'11':'Декабрь'
		};
		c.query_id = 0;
		var days_check = {};
		
		//Функция инициализации нового календаря
		c.init = function(arguments) {
			c.args = arguments;
			if (typeof c.args.set2none == 'undefined') {
				c.args.set2none = false;
			}
			c.start_date = new Date(c.args.now_date.y, (c.args.now_date.m-1), c.args.now_date.d);
			c.using_date = new Date(c.args.now_date.y, (c.args.now_date.m-1), c.args.now_date.d);
			c.using_month = new Date(c.args.now_date.y, (c.args.now_date.m-1), 1);
			days_check[(c.args.now_date.m-1) + '-' + c.args.now_date.y] = c.args.days;

			$(c).html('<div class="calendar"></div>');
			c.form_html();
		}


		//Функция вернуть количество дней в месяце
		c.get_days_count = function(year, month) {
         		if ((month == 4 || month == 6 || month == 9 || month == 11)) {
             			return 30;
         		}
         		if (month == 2) {
             			var leap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
				if (!leap) {
                 			return 28;
             			} else {
					return 29;
				}
			}
			return 31;
		}

		//Функция сформировать даты для месяца
		c.form_days_object = function() {

			//var days = new Array();
			var days = {};
			var counter = -1;

			//Предыдущие дни
			var day = c.using_month.getDay();
			if (day == 0) { day = 7; }
			var before_days = day - 1;
			if (before_days > 0) {
				var last_month = c.get_last_month();
				var last_month_days_count = c.get_days_count(last_month.getFullYear(), last_month.getMonth()+1);
				for (var i = before_days; i > 0; i--) {
					counter += 1;
					days[counter] = {
						'date' : new Date(last_month.getFullYear(), last_month.getMonth(), (last_month_days_count - i + 1)),
						'type' : 'no',
						'use' : false
					};
				}
			}

			//Текущие дни
			var days_count = c.get_days_count(c.using_month.getFullYear(), c.using_month.getMonth()+1);
			for (var i = 1; i <= days_count; i++) {
					var use = false;
					if (inArray(i, days_check[c.using_month.getMonth() + '-' + c.using_month.getFullYear()]) == true) {
						use = true;
					}
					counter += 1;
					days[counter] = {
						'date' : new Date(c.using_month.getFullYear(), c.using_month.getMonth(), i),
						'type' : 'now',
						'use' : use
					};
			}

			//Дни следующего месяца	
			var next_date = new Date(c.using_month.getFullYear(), c.using_month.getMonth(), days_count);
			day = next_date.getDay();
			if (day == 0) { day = 7; }
			var after_days = 7 - day;
			if (after_days > 0) {
				var next_month = c.get_next_month();
				var next_month_days_count = c.get_days_count(next_month.getFullYear(), next_month.getMonth()+1);
				for (var i = 1; i <= after_days; i++) {
					counter += 1;
					days[counter] = {
						'date' : new Date(next_month.getFullYear(), next_month.getMonth(), i),
						'type' : 'no',
						'use' : false
					};
				}
			}
			return days;

		}


		//Функция формирования HTML
		c.form_html = function() {
			var html = '';
			html += '<div class="calendar_nav"><a href="javascript://" class="calendar_nav_left"></a><div class="calendar_month">'+months[c.using_month.getMonth()]+' '+c.using_month.getFullYear()+'</div><a href="javascript://" class="calendar_nav_right"></a><div class="clearboth"></div></div>';
			html += '<table class="calendar_days_week" cellspacing="0"><tr><td><span title="Понедельник">пн</span></td><td><span title="Вторник">вт</span></td><td><span title="Среда">ср</span></td><td><span title="Четверг">чт</span></td><td><span title="Пятница">пт</span></td><td><span title="Суббота">сб</span></td><td><span title="Воскресенье">вс</span></td></tr></table>';
			html += '<table class="calendar_days" cellspacing="0">';

			var days = c.form_days_object();
			for (var day in days) {
				if (day % 7 == 0) { html += '<tr>'; }
				html += '<td class="';
				if (days[day]['type'] == 'no') { html += 'no '; }
				html += '"><a href="';
				if (days[day].use == true) {
					var d = days[day].date.getDate();
					var m = (days[day].date.getMonth() + 1);
					html += c.args.prefix + ((d < 10) ? '0'+d : d) + '-' + ((m < 10) ? '0'+m : m) + '-' + days[day].date.getFullYear() + c.args.postfix + '"';
					html += ' class="';
					if (c.start_date.valueOf() == days[day].date.valueOf() && c.args.set2none == false) {
						html += ' now_date_link';
					}
					html += ' yes_link';
				} else {
					html += 'javascript://" class="no_link'; 
				}
				if (day % 7 == 5 || day % 7 == 6) {
					html += ' weekend';
				}
				html += '">';
				html += days[day].date.getDate() + '</a></td>';
				if (day % 7 == 6) { html += '</tr>'; }
			}

			html += '</table>';


			$(c).find('.calendar').html(html);
			$(c).find('.calendar_nav_left').click(function() {
				c.using_month = c.get_last_month();
				c.load_month();
			});
			$(c).find('.calendar_nav_right').click(function() {
				c.using_month = c.get_next_month();
				c.load_month();
			});

		}


		//Функция вернуть месяц предыдущий
		c.get_last_month = function() { 
			var now_month = c.using_month.getMonth();
			var now_year = c.using_month.getFullYear();
			if (now_month == 0) {
				now_month = 11;
				now_year = now_year - 1;
			} else {
				now_month = now_month - 1;
			}
			return new Date(now_year, now_month, 1);
		}

		//Функция вернуть месяц следующий
		c.get_next_month = function() { 
			var now_month = c.using_month.getMonth();
			var now_year = c.using_month.getFullYear();
			if (now_month == 11) {
				now_month = 0;
				now_year = now_year + 1;
			} else {
				now_month = now_month + 1;
			}
			return new Date(now_year, now_month, 1);
		}

		//Подгрузка месяца
		c.load_month = function() {
			$(c).find('.calendar_month').html(months[c.using_month.getMonth()]+' '+c.using_month.getFullYear());
			if (typeof days_check[c.using_month.getMonth() + '-' + c.using_month.getFullYear()] != 'undefined') {
				c.form_html();
			} else {
				//days_check[c.using_month.getMonth() + '-' + c.using_month.getFullYear()] = new Array();

				c.query_id += 1;

				$.ajax({
					query_id : c.query_id,
					url: c.args.url_get_dates + c.using_month.getDate() + '-' + (c.using_month.getMonth()+1) + '-' + c.using_month.getFullYear(),
					data : {},
					cache : false,
					timeout : 5000,
					type : 'POST',
					success: function(data) {
						if (this.query_id != c.query_id) {
							return false;
						}
						eval('var days = '+data+';');
						days_check[c.using_month.getMonth() + '-' + c.using_month.getFullYear()] = days;
						c.form_html();
					}, 
					error: function() {
				
					}
				});

/*

				$.post(c.args.url_get_dates + c.using_month.getDate() + '-' + (c.using_month.getMonth()+1) + '-' + c.using_month.getFullYear(), {}, function(data){
					eval('var days = '+data+';');
					days_check[c.using_month.getMonth() + '-' + c.using_month.getFullYear()] = days;
					c.form_html();
				});
*/

			}
		}

		c.init(arguments);
	};

});