# README

* Database design
## usersテーブル
  |Column|Type|Options|
  |------|----|-------|
  |name|varchar|null: false|
  |email_address|varchar|null: false,unique: true|
  |password|varchar|null: false|

  ### Association
  - has_many :groups_users
    - has_many :groups, though: :groups_users
  - has_many :massages

## groupsテーブル
  |Column|Type|Options|
  |------|----|-------|
  |name|varchar|null: false|

  ### Association
  - has_many :groups_users
    - has_many :users, though: :groups_users
  - has_many :massages

## groups_usersテーブル
  |Column|Type|Options|
  |------|----|-------|
  |user_id|integer|null: false, foreign_key: true|
  |group_id|integer|null: false, foreign_key: true|

  ### Association
  - belongs_to :group
  - belongs_to :user

## massagesテーブル
  |Column|Type|Options|
  |------|----|-------|
  |body|text|null: false|
  |group_id|integer|null: false, foreign_key: true|
  |user_id|integer|null: false, foreign_key: true|
  |image|varchar||
  |timestamp|datetime|null: false|

  ### Association
  - belongs_to :group
  - belongs_to :user