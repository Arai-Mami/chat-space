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
| name   | string | null: false |
| email  | text   | null: false |

## Association
- has_many :groups through: :groups_users
- has_many :messages


## groupsテーブル
| Column     | Type   | Option      |
| ---------- | ------ | ----------- |
| group_name | string | null: false |

## Associations
- has_many :users through: :groups_users
- has_many :messages

## groups_usersテーブル
| Column   | Type    | Option                         |
| -------- | ------- | ------------------------------ |
| user_id  | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |         |         |                                |

## Associations
- belongs_to :user
- belongs_to :group

## messagesテーブル
| Column   | Type    | Option      |
| -------- | ------- | ----------- |
| body     | text    | null: false |
| image    | string  |             |
| group_id | integer | null: false |
| user_id  | integer | null: false |

## Associations
- belongs_to :user
- belongs_to :group
