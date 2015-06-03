class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :user_id
      t.integer :exam_no
      t.integer :exam_answer
      t.timestamps
    end
  end
end
