# Shepherd

Shepherd is the code management system used on the RoboCon brains. For more infomation about how to use it see [here](https://hr-robocon.org/docs/connecting.html).

## Shepherd itself

Shepherd is effectively a rewrite of Student Robotics' [Herdsman][],
which allows competitors to upload code to their robot and view logs in
real time.

As Herdsman is a Twisted app, and the author of Shepherd is not familiar
with Twisted, it was decided that writing a Herdsman clone that uses
Flask would be easier than working out how to deploy Herdsman in the
context of RoboCon, and thus Shepherd was created.

[Herdsman]: https://github.com/srobo/brain-herdsman

## Sheep

Sheep is an adapted version of vs-codes editor to add scratch support and work with blockly.
