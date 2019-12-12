# 3 stages of artificial intelligence

"Human reason has the peculiar fate in one species of its cognitions that it is burdened with questions which it cannot dismiss, since they are given to it as problems by the nature of reason itself, but which it also cannot answer, since they transcend every capacity of human reason."----Critique of Pure reason, Immanuel Kant.

Some say artificial intelligence is human kind's last creation. It really seem like it is, at least I cannot imagine what is beyond it. Space traveling? Immortality? And then out of boredom we reset ourselves in simulations and the universe, at least for our so preciously treasured subjective experiences, gets a reboot and start over again?
But let's not imagine that far just yet. 
Just how much would artificial intelligence change our lives?
I see there are 3 stages of artificial intelligence development,

|                              |
|------------------------------|
|Procedural general intelligence|
| Reasoning general intelligence|
| Supreme general intelligence|

Procedural general intelligence
-
procedural general intelligence means intelligence which has the ability to be taught a large variety of tasks in arbitrary domains. This differs from a specialized system which can only accomplish one task, but it is essentially the generalized form. So for example a specialized system is a robot working on an assembly line, but instead, a robot which can be taught to work on most arbitrary assembly lines, is a perceptual general intelligence.
To achieve procedural general intelligence, we'll need:

|                              |
|------------------------------|
|A representation model of the world states|
| A representation of possible actions|
| A planner which, given an arbitrary goal state, could produce a plan for a sequence of actions, or anticipations of actions, to eventually bring reality closer to the desired goal state.|


 [François Chollet](https://arxiv.org/search/cs?searchtype=author&query=Chollet%2C+F)'s On measure of intelligence considers the intelligent system and the planner separate entities, which the planner("skill program") is constantly being modified by the "intelligent system" and becomes better at producing "responses", given a "situation".
He argues that the important basis of generalization comes from creating good skill programs suited for each task.
But here I am claiming that it is more important to have a good representation and a universal planner which is updated all the time, but it's gain in performance should benefit not an individual but many tasks.
Assuming a certain degree of consistency and uniformity in sensory input and action space. An intelligent system will be much more efficient to not learn every time, but rather learn the basis to solve all the problems at all the same time. Concretely, this is the process of a human learning the certain "semantic principles" of nature, such "Objectness and elemantary physics" etc, outlined in the same article, by [François Chollet](https://arxiv.org/search/cs?searchtype=author&query=Chollet%2C+F).

It seems to be generally agreed ,that to accomplish such a task( obtaining a good representation of the world), can only be effectively done initially through an unsupervised learning setup.  Often a network which had been trained to predict immediate or delayed future states is expected to therefore hold a latent representation of the rules of how states will transition. 
Heuristically this should be the equivalent to a human's instinctive anticipation of a cup about to fall off an edge of a table, or the trajectory of a ball that is thrown. And there seems to be an amount of success, at doing so with deep neuronetworks based on gradient descent. [[Ubisoft](https://static-wordpress.akamaized.net/montreal.ubisoft.com/wp-content/uploads/2019/08/27140237/deep-cloth-paper.pdf) ][[world models](https://arxiv.org/abs/1803.10122)]
And seems to be what is [Carl friston](https://slatestarcodex.com/2018/03/04/god-help-us-lets-try-to-understand-friston-on-free-energy/) and standard predictive processing theory of the brain is also trying to say.

After such a good representation is acquired, the intelligent system should then be able to quite competently accomplish locomotion, at least in it's familiar domains (so concretely for example you cannot call a human not capable of procedural general intelligence, for not being able to swim like Michael Phelps, the first time it is thrown into the water). 
And also as "objectness" and "temporal credit assignment" is acquired, the bridge between perception to conception is now opened. This will eventually take us to the next step of intelligence, but for now just the acquiring of some sort of encoding is really useful. The encoding is called language, and this allows for language based higher level planning, and as well as command interpretation and learning through higher level.
(well put into simple words that the common folks can read while sipping yogurt, basically if we have a good representation, we can then associate some sort of code with different parts of that representation , language is the code, and then we can talk to the robot to tell it what to do, and tell it new things.) 

At this level, the robot is pretty good. Many people are advertising causal inference is needed, but I argue that it is mis-leading to confuse the hard problem of intelligence to the simple problem of intelligence, which is the step towards procedural general intelligence. More on that later.
And see more of procedural general intelligence at:
[progress towards procedural general intelligence, where are we now?](./proceduralprogress.html)

In summary: 
procedural general intelligence - give me a goal and I'll try to do it from what i know of how to achieve it.

Reasoning general intelligence
-
Actually by later I mean now. So reasoning general intelligence I think is the hard and extremely less studied part of artificial intelligence.
To reason and do science, to not only make associations between objects and understand the consequences one's action, we would like a deep thinking one which can go down the rabbit hole of questions.
Imagine a robot sipping on some not particularly well tasting beverage, usually bitter, legs crossed, staring aimlessly into the distance, pondering about various things. Then you know we are there.
But jokes aside.
The main difference, between procedural and reasoning general intelligence is that now it can build it's own abstract models of the world (in contrast to a direct association of the world into one grand representation) 
More on that in: [What do different representations represent? A representative selection of current literature](./representations.html)
I actually won't comment much on this now, as so little have I personally considered reasoning general intelligence. But the heuristics is that this is the question of "how do we get robots to do our thinking for us so we can all sit back, relax, enjoy our turing award and drink strawberry smoothies."  
It is the question of how do we get robots to invent mathematics, or computer science. The process is abstraction building, and pattern finding, and more. See more on that in [abstraction building, pattern finding, and more](another.html)


In summary: 
Reasoning general intelligence - give me a question and I'll try to solve it, if I can't I could possibly(or not, depending on setting and rewards) make all sorts of sub goals and sub questions until I find the answer. And I'll also try to ask questions myself. 

Supreme general intelligence
-
At no time in history when the word "supreme" appeared in any serious terminology resulted in any serious effect.
Quantum supremacy, for instance, is now achieved, but not a very good significant indication of quantum computing progress. (Speaking of also not very good significant indications of progress, more on that in [What are good indicators of progress in our dreams of creating robot friends? Obviously not the Turing test](./Turingtest.html))

But oh well, what is a better term, extreme?
Actually yeah, let's call it extreme intelligence.

Extreme general intelligence
-
Extreme general intelligence is the point of which the intelligence has surpassed the capabilities, perhaps possibly the imaginations of the human mind. It will be something of a new specie of it's own. Who knows what will happen.  But I suppose there are not very much value in discussing extreme general intelligence , although possibly on how we might create it, purposefully or accidentally, more on that in [how can we mess up](./manyways.html)
Perhaps there might be intelligence which is beyond what our intelligence could handle? Perhaps there is a hire-achy of levels of intelligence,in which intelligence sitting at lower levels of the pyramid cannot reach up to create ones above, and it is easy for ones above to reach down?

Summary
- 
I think we are quite soon as to achieving the first stage, procedural general intelligence will have very high impact on various industries across the landscape of human societies. It is however often confused, even by researchers and experts, of what it means by "artificial intelligence". Critics who bash deep learning as unscientific and not human, are seeing an exact and definitive view on artificial intelligence, often referring to Reasoning general intelligence, but we must realize that it will not, and never will be the case of a sudden singularity where artificial intelligence becomes an influential technology among human lives, computer vision based on deep learning is already at the front end of facial recognition,self driving cars and speeding up various visual analysis tasks in medical image analysis, film ,surveying and other areas. 
Practically, I am curious to see as to what happens next, is procedural general intelligence the next internet? We'll see. 





