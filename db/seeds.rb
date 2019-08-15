technical_skills = [
 [ "Javascript", 100 ],       
 [ "Ruby on Rails", 100 ],       
 [ "SQL", 100 ],       
 [ "graphQL", 100 ],       
 [ "HTML", 100 ],       
 [ "CSS", 100 ],       
 [ "Database Design", 100 ],       
 [ "API", 100 ],       
 [ "React", 100 ],       
 [ "jQuery", 100 ],       
 [ "JSX", 100 ],       
 [ "UX/UI", 100 ],       
 [ "Java", 100 ],       
 [ "Python", 100 ],       
 [ "Agile", 100 ],       
 [ "Scrum", 100 ]       
]

a = Platform.create
technical_skills.each do |name, score|
  techskill = Skill.create(
    name: name,
    score: score,
    description: nil
  )

  # soft_skills = [
  #   [ "Customer Service", 100 ],       
  #   [ "Project Management", 100 ],       
  #   [ "Team Building", 100 ],       
  #   [ "Leadership", 100 ],       
  #   [ "Process Improvement", 100 ],       
  #   [ "Quality Assurance", 100 ],       
  #   [ "Database Design", 100 ],       
  #   [ "API", 100 ],       
  #   [ "Javascript", 100 ],       
  #   [ "Javascript", 100 ],       
  #   [ "Javascript", 100 ],       
  #   [ "Javascript", 100 ],       
  #  ]
   
  #  soft_skills.each do |name, score|
  #    softskill = Skill.create(
  #      name: name,
  #      score: score,
  #      description: nil
  #    )