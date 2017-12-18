CREATE TABLE opros ( 
    `opros_id` INT NOT NULL , 
    `student_name` VARCHAR( 100 ) NOT NULL ,
    `opr_date` DATETIME NOT NULL ,
    `ans_color` TEXT NOT NULL , 
    `ans_face` TEXT NOT NULL , 
    `result` TEXT NOT NULL ,
    PRIMARY KEY ( `opros_id` ) , 
    INDEX ( `student_name` ) 
) ENGINE = InnoDB;
