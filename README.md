# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
| Column | Type   | Option      |
| ------ | ------ | ----------- |
| name   | string | null: false, unique: true, index: true |
| email  | string | null: false, unique: true, index: true |

## Association
- has_many :groups_users
- has_many :groups, through: :groups_users, source: :groups
- has_many :messages



## groupsテーブル
| Column     | Type   | Option      |
| ---------- | ------ | ----------- |
| group_name | string | null: false |

## Associations
- has_many :groups_users
- has_many :users, through: :groups_users, source: :users
- has_many :messages

## groups_usersテーブル
| Column   | Type       | Option                                      |
| -------- | ---------- | ------------------------------------------- |
| user_id  | references | null: false, foreign_key: true, index :true |
| group_id | references | null: false, foreign_key: true, index :true |

## Associations
- belongs_to :user
- belongs_to :group

## messagesテーブル
| Column   | Type       | Option                         |
| -------- | ---------- | ------------------------------ |
| message     | text       |                                |
| image    | string     |                                |
| group_id | references | null: false, foreign_key: true, index :true |
| user_id  | references | null: false, foreign_key: true, index :true |

## Associations
- belongs_to :user
- belongs_to :group
