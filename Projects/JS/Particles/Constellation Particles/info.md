> BreakDown:

# There is a nested loop in handleParticles.

# After one batch of particles are rendered, the nested loop calculates the distance between the x and y co-ordinates of one particle and its proceeding particle. 

# And if they are within 100px distance then line is draw from that one point to other creating a constellation like effect.