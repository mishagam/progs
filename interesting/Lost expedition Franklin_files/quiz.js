/* Тесты моя планета */

$(function(){

	$.fn.create_quiz = function(item) {

		var quiz = this;
		quiz.is_block = false;
		quiz.id = item.id;
		quiz.mode = parseInt(item.mode);
		quiz.questions = item.questions;
		quiz.is_participated = item.is_participated;
		quiz.now_question = 0;
		quiz.now_question_status = 0;
		quiz.last_question = 0;
		quiz.questions_hashes = {};
		quiz.questions_answers = {};
		
		//Инициализация
		quiz.init = function() {
		
			var html = '<div class="quiz_container"><div class="quiz_liner"><div class="quiz_liner_c"></div></div><div class="quiz_question"></div></div>';
			
			$(quiz).html(html);
			
			$.each(quiz.questions, function(i, v) {
				$(quiz).find('.quiz_liner_c').append('<span class="quiz_liner_span quiz_liner_'+v.n+'"><span class="in">№'+(v.n+1)+'</span></span>');
				quiz.last_question = v.n;
			});
			$(quiz).find('.quiz_liner_c').append('<div class="clearboth"></div>');

			if (api2.is_auth == false) {
				$(quiz).find('.quiz_question').html('<div class="quiz_form_no_rights">\
					Чтобы сохранился результат прохождения теста, вам необходимо <a href="javascript://" onclick="api2_events.show_box_auth();">авторизоваться</a> или <a href="javascript://" onclick="api2_events.show_box_registration();">зарегистрироваться</a>.\
					Либо <a href="javascript://" class="go">нажмите сюда</a>, чтобы пройти тест без сохранения результата.\
				</div>');
				$(quiz).find('.quiz_question .quiz_form_no_rights a.go').click(function() {
					quiz.show_question(0);
					quiz.check_scroll();
					return false;
				});				
			
			} else if (quiz.is_participated == true) {
				$(quiz).find('.quiz_question').html('<div class="quiz_form_no_rights">\
					Вы уже проходили данный тест. Чтобы пройти его еще раз, <a href="javascript://" class="go">нажмите сюда</a>, но результат повторно не сохранится.\
				</div>');
				$(quiz).find('.quiz_question .quiz_form_no_rights a.go').click(function() {
					quiz.show_question(0);
					quiz.check_scroll();
					return false;
				});
				
			} else {
				quiz.show_question(0);
			}
		};
		
		//Показать вопрос
		quiz.show_question = function(n) {
		
			quiz.now_question = n;
			quiz.now_question_status = 0;
			$(quiz).find('.quiz_liner_c .quiz_liner_span').removeClass('sel');
			$(quiz).find('.quiz_liner_c .quiz_liner_'+quiz.now_question).addClass('sel');
			
			var html = '';
			html += '<div class="quiz_question_html_body">'+quiz.questions['i'+quiz.now_question].html_body+'</div>';
			html += '<div class="quiz_question_body">\
				<div class="quiz_question_body_title">'+quiz.questions['i'+quiz.now_question].title+'</div>\
				<div class="quiz_question_body_answers">';
				$.each(quiz.questions['i'+quiz.now_question].answers, function(i, v) {
					if (quiz.questions['i'+quiz.now_question].type == 'radio') {
						html += '<div class="quiz_question_body_answer radio"><div class="left"><input type="radio" name="answer_'+quiz.questions['i'+quiz.now_question].id+'" id="answer_'+v.id+'" data-id="'+v.id+'" class="ui_input_radio"></div><div class="right"><label for="answer_'+v.id+'">'+v.title+'</label></div><div class="clearboth"></div>';
					} else if (quiz.questions['i'+quiz.now_question].type == 'checkbox') {
						html += '<div class="quiz_question_body_answer checkbox"><div class="left"><input type="checkbox" name="answer_'+quiz.questions['i'+quiz.now_question].id+'" id="answer_'+v.id+'" data-id="'+v.id+'" class="ui_input_checkbox"></div><div class="right"><label for="answer_'+v.id+'">'+v.title+'</label></div><div class="clearboth"></div>';					
					}
					html += '</div>';
				});
			html += '</div>\
				<div class="quiz_question_body_next"><div style="float:left"><a href="javascript://" class="ui_button">Далее</a></div><div style="float:left; font-size:0px; padding:3px 0 0 12px; display:none;" class="quiz_loader_icon"><img src="/templates/images/box/small_loader.gif"></div><div class="clearboth"></div></div>\
			</div>';
			
			$(quiz).find('.quiz_question').html(html);
			api2.customize_all();
			
			$(quiz).find('.quiz_question_body_next a').click(function() {
				quiz.next_go();
				return false;
			});
			
		};
		
		//Ответ верный
		quiz.show_question_right = function(data) {

			if(typeof quiz.questions['i'+quiz.now_question].html_body_wrong != 'undefined'
				&& quiz.questions['i'+quiz.now_question].html_body_wrong != ''){
				$('.quiz_question_html_body').html(quiz.questions['i'+quiz.now_question].html_body_wrong);
			}
			$(quiz).find('.quiz_question_body_answers').replaceWith('<div class="quiz_question_body_result right">Вы ответили верно!</div><div class="quiz_question_body_result_comment">'+data.after_answer_comment+'</div>');
			quiz.now_question_status = 1;
			//
			$(quiz).find('.quiz_liner_c .quiz_liner_'+quiz.now_question).addClass('right');
			quiz.questions_hashes[quiz.questions['i'+quiz.now_question].id] = data.hash;
			//
			quiz.check_scroll();
			//
			//quiz.next_question();
		};
		
		//Ответ неверный
		quiz.show_question_not_right = function(data) {

			if(typeof quiz.questions['i'+quiz.now_question].html_body_wrong != 'undefined'
				&& quiz.questions['i'+quiz.now_question].html_body_wrong != ''){
				$('.quiz_question_html_body').html(quiz.questions['i'+quiz.now_question].html_body_wrong);
			}
			$(quiz).find('.quiz_question_body_answers').replaceWith('<div class="quiz_question_body_result not_right">Вы ответили неверно!</div><div class="quiz_question_body_result_comment">'+data.after_answer_comment+'</div>');
			quiz.now_question_status = 1;
			$(quiz).find('.quiz_liner_c .quiz_liner_'+quiz.now_question).addClass('not_right');
			quiz.check_scroll();
			
		};
		
		//Ответ на подсчёт баллов
		quiz.show_question_points = function(data) {

			quiz.questions_answers[quiz.questions['i'+quiz.now_question].id] = data.answers;
			$(quiz).find('.quiz_liner_c .quiz_liner_'+quiz.now_question).addClass('right');
			quiz.next_question();
			
		};
		
		//Результат
		quiz.show_result = function(data) {
		
			$(quiz).find('.quiz_liner_c .quiz_liner_span').removeClass('sel');
			$(quiz).find('.quiz_question_html_body').remove();
			$(quiz).find('.quiz_question_body').empty();
			
			var title = 'Я прошел тест и мой результат '+data.quiz_result.points+' '+declOfNum(data.quiz_result.points, ['балл', 'балла', 'баллов']);
			var html = '<div class="quiz_question_body_all_result">Поздравляем! <br> Вы прошли тест,'+(quiz.mode == 1 ? ' ответили верно на '+data.quiz_result.right_q_count+' из '+data.quiz_result.all_q_count+' '+declOfNum(data.quiz_result.all_q_count, ['вопроса', 'вопросов', 'вопросов']) : '')+' и набрали '+data.quiz_result.points+' '+declOfNum(data.quiz_result.points, ['балл', 'балла', 'баллов'])+'.</div>';

			if (data.quiz_result.summary.id > 0) {
				html += '<div class="quiz_question_body_summary_result">'+data.quiz_result.summary.content+'</div>';
			}
			
			if (data.quiz_result.is_added == 1 && quiz.mode == 1) {
				html += '<div class="quiz_question_body_rating_result">К вашему личному рейтингу ' + declOfNum(data.quiz_result.points, ['добавлен', 'добавлено', 'добавлено']) + ' ' +data.quiz_result.points+' '+declOfNum(data.quiz_result.points, ['балл', 'балла', 'баллов']) + '.</div>';
			}
			
			html += '<div class="quiz_question_body_share_result"><div class="title">Поделиться результатом:</div><div id="ya_sharing"></div></div>';
			$(quiz).find('.quiz_question_body').append(html);
			
			var qu, qt;
			if (data.quiz_result.is_added == 0) {
				qu = 0;
				qt = 0;
			} else {
				qu = api2.user.id;
				qt = quiz.id;
			}
			
			new Ya.share({
                element: 'ya_sharing',
					theme: 'counter',
                    elementStyle: {
                        'quickServices': ['vkontakte', 'facebook', 'twitter', 'odnoklassniki', 'moimir', 'gplus']
                    },
                    title: document.title,
                    description: title,
                    serviceSpecific: {
                        twitter: {
                            title: title
                       },
					   facebook : {
							link: 'http://'+api2.settings.host+'/'+api2.settings.url+'?qu='+qu+'&qt='+qt
					   }
                }
			});

			quiz.check_scroll();
		};
		
		//Следующий вопрос
		quiz.next_question = function() {
		
			if (quiz.now_question == quiz.last_question) {
			
				quiz.block(true);
				$.ajax({
					type: "POST",
					url: '/quiz/count_result/',
					data: {'quiz_id' : quiz.id, 'answers' : JSON.stringify((quiz.mode == 1 ? quiz.questions_hashes : (quiz.mode == 2 ? quiz.questions_answers : [])))},
					timeout:10000,
					cache: false,
					success: function(data) {
						eval('var data = ' + data + ';');
						quiz.block(false);
						if (data.code == 1) {
							quiz.show_result(data);
						} else if (data.code == 0) {
							api2_box.alert('Произошла неизвестная ошибка.');
						}
					},
					error: function() {
						quiz.block(false);
						api2_box.alert(api2.words.ajax_error);
					}
				});
				
			} else {
				quiz.show_question(quiz.now_question + 1);
				quiz.check_scroll();
			}
			
		};
		
		//Событие - далее
		quiz.next_go = function() {
		
			if (quiz.is_block == true) {
			
				return false;
				
			} else if (quiz.now_question_status == 0) {
			
				var answers = [];
				$(quiz).find('.quiz_question_body_answers').find('input[type=radio]:checked, input[type=checkbox]:checked').each(function() {
					answers.push($(this).attr('data-id'));
				});
				if (answers.length == 0) {
					api2_box.alert('Вы не выбрали ответ.');
					return false;
				}
		
				quiz.block(true);
				$.ajax({
					type: "POST",
					url: '/quiz/give_answer/',
					data: {'quiz_id' : quiz.id, 'question_id' : quiz.questions['i'+quiz.now_question].id, 'answers' : answers.join(',')},
					timeout:10000,
					cache: false,
					success: function(data) {
						eval('var data = ' + data + ';');
						quiz.block(false);
						if (quiz.mode == 1) {
							if (data.code == 1) {
								quiz.show_question_right(data);
							} else if (data.code == 2) {
								quiz.show_question_not_right(data);
							} else if (data.code == 0) {
								api2_box.alert('Произошла неизвестная ошибка.');
							}
						} else if (quiz.mode == 2) {
							if (data.code == 0) {
								api2_box.alert('Произошла неизвестная ошибка.');
							} else {
								quiz.show_question_points(data);
							}
						}
					},
					error: function() {
						quiz.block(false);
						api2_box.alert(api2.words.ajax_error);
					}
				});
				
			} else if (quiz.now_question_status == 1) {
			
				quiz.next_question();
			}
		};
		
		quiz.block = function(t) {
		
			if (t == true) {
				quiz.is_block = true;
				$(quiz).find('.quiz_loader_icon').show();
			} else {
				quiz.is_block = false;
				$(quiz).find('.quiz_loader_icon').hide();
			}
		};
		
		quiz.check_scroll = function() {
		
			$('body, html, document').animate({scrollTop : $(quiz).position().top}, 0);
		
		};
		
		quiz.init();
		
	};

});