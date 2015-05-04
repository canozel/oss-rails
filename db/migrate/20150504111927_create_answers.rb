class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :user_id
      t.string :list, array: true, default: []
      t.timestamps
    end
  end
end
