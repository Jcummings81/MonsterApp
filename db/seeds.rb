# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Monster.destroy_all

jimbo = User.create!(username: 'jimbo', email: 'jimbo@ga.co', password: 'password')
faust = User.create!(username: 'faust', email: 'faust@ga.co', password: 'password')
bumpy = User.create!(username: 'bumpy', email: 'bumpy@ga.co', password: 'password')
slice = User.create!(username: 'slice', email: 'slice@ga.co', password: 'password')
beebop = User.create!(username: 'beebop', email: 'beebop@ga.co', password: 'password')
rocksteady = User.create!(username: 'rocksteady', email: 'rocksteady@ga.co', password: 'password')

# jimbo monsters
Monster.create(user: jimbo, name: 'Stacey', description: 'A friendly Monster')
Monster.create(user: jimbo, name: 'Lacey', description: 'A fiendish Monster')
Monster.create(user: jimbo, name: 'Tracey', description: 'A fucked up Monster')

# faust monsters
Monster.create(user: faust, name: 'Kim', description: 'A funny Monster')
Monster.create(user: faust, name: 'Lim', description: 'A frightening Monster')
Monster.create(user: faust, name: 'Jim', description: 'A fellow Monster')

# bumpy monsters
Monster.create(user: bumpy, name: 'Stan', description: 'A full figured Monster')
Monster.create(user: bumpy, name: 'Dan', description: 'A frumpy Monster')
Monster.create(user: bumpy, name: 'Cam', description: 'A faculty Monster')

# slice monsters
Monster.create(user: slice, name: 'Katrina', description: 'A friendly Monster')
Monster.create(user: slice, name: 'Latrina', description: 'A fiendish Monster')
Monster.create(user: slice, name: 'Shawquina', description: 'A fucked up Monster')

# beebop monsters
Monster.create(user: beebop, name: 'Cicero', description: 'A funny Monster')
Monster.create(user: beebop, name: 'Herodotus', description: 'A frightening Monster')
Monster.create(user: beebop, name: 'Archimedes', description: 'A fellow Monster')

# rocksteady monsters
Monster.create(user: rocksteady, name: 'Vulture', description: 'A full figured Monster')
Monster.create(user: rocksteady, name: 'Culture', description: 'A frumpy Monster')
Monster.create(user: rocksteady, name: 'Shimsham', description: 'A faculty Monster')
