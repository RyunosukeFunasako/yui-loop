module hfmy/app

go 1.19

replace hfmy/api => ./api

require hfmy/api v0.0.0-00010101000000-000000000000

require github.com/lib/pq v1.10.7 // indirect