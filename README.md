# README

* Database design
## usersテーブル
  |Column|Type|Options|
  |------|----|-------|
  |user_id|integer|null: false, unique: true|
  |user_name|varchar|null: false|
  |email_address|varchar|null: false,unique: true|
  |password|varchar|null: false|

  ### Association
  - has_many :groups_users
    - has_many :group, though: :groups_users
  - has_many :massages

## groupsテーブル
  |Column|Type|Options|
  |------|----|-------|
  |group_id|integer|null: false, unique: true|
  |group_name|varchar|null: false|

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
  |massage_id|integer|null: false, unique: true|
  |body|text|null: false|
  |group_id|integer|null: false, foreign_key: true|
  |user_id|integer|null: false, foreign_key: true|
  |image_id|integer|foreign_key: true|
  |timestamp|datetime|null: false|

  ### Association
  - belongs_to :group
  - belongs_to :user
  - mas_many :images

## imagesテーブル
  |Column|Type|Options|
  |------|----|-------|
  |image_id|integer|null: false, unique: true|
  |image_path|varchar|null: false, unique: true|

  ### Association
  - belongs_to :massage