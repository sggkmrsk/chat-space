# README

* Database design
## usersテーブル
  |Column|Type|Options|
  |------|----|-------|
  |name|string|null: false,index: true|
  |email_address|string|null: false,unique: true|
  |password|string|null: false|

  ### Association
  - has_many :groups_users
    - has_many :groups, though: :groups_users
  - has_many :massages

## groupsテーブル
  |Column|Type|Options|
  |------|----|-------|
  |name|string|null: false|

  ### Association
  - has_many :groups_users
    - has_many :users, though: :groups_users
  - has_many :massages

## groups_usersテーブル
  |Column|Type|Options|
  |------|----|-------|
  |user_id|references|null: false, foreign_key: true|
  |group_id|references|null: false, foreign_key: true|

  ### Association
  - belongs_to :group
  - belongs_to :user

## massagesテーブル
  |Column|Type|Options|
  |------|----|-------|
  |body|text||
  |image|string||
  |group_id|references|null: false, foreign_key: true|
  |user_id|references|null: false, foreign_key: true|
  |timestamp|datetime|null: false|

  ### Association
  - belongs_to :group
  - belongs_to :user