# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(email: "can.ozel@bil.omu.edu.tr",  :password => "123456789", :password_confirmation => "123456789")
Answer.create(user_id: 1, exam_no: 1, exam_answer: 3)
Answer.create(user_id: 1, exam_no: 2, exam_answer: 2)
Answer.create(user_id: 1, exam_no: 3, exam_answer: 2)
Answer.create(user_id: 1, exam_no: 4, exam_answer: 1)
Answer.create(user_id: 1, exam_no: 5, exam_answer: 0)