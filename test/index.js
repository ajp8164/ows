'use strict';

var should = require('chai').should();
var nodeKind = require('../');

describe('Library', function() {
  it('should export bcccore primatives', function() {
    should.exist(nodeKind.bcccore.crypto);
    should.exist(nodeKind.bcccore.encoding);
    should.exist(nodeKind.bcccore.util);
    should.exist(nodeKind.bcccore.errors);
    should.exist(nodeKind.bcccore.Address);
    should.exist(nodeKind.bcccore.Block);
    should.exist(nodeKind.bcccore.MerkleBlock);
    should.exist(nodeKind.bcccore.BlockHeader);
    should.exist(nodeKind.bcccore.HDPrivateKey);
    should.exist(nodeKind.bcccore.HDPublicKey);
    should.exist(nodeKind.bcccore.Networks);
    should.exist(nodeKind.bcccore.Opcode);
    should.exist(nodeKind.bcccore.PrivateKey);
    should.exist(nodeKind.bcccore.PublicKey);
    should.exist(nodeKind.bcccore.Script);
    should.exist(nodeKind.bcccore.Transaction);
    should.exist(nodeKind.bcccore.URI);
    should.exist(nodeKind.bcccore.Unit);
  });

  it('should export btccore primatives', function() {
    should.exist(nodeKind.btccore.crypto);
    should.exist(nodeKind.btccore.encoding);
    should.exist(nodeKind.btccore.util);
    should.exist(nodeKind.btccore.errors);
    should.exist(nodeKind.btccore.Address);
    should.exist(nodeKind.btccore.Block);
    should.exist(nodeKind.btccore.MerkleBlock);
    should.exist(nodeKind.btccore.BlockHeader);
    should.exist(nodeKind.btccore.HDPrivateKey);
    should.exist(nodeKind.btccore.HDPublicKey);
    should.exist(nodeKind.btccore.Networks);
    should.exist(nodeKind.btccore.Opcode);
    should.exist(nodeKind.btccore.PrivateKey);
    should.exist(nodeKind.btccore.PublicKey);
    should.exist(nodeKind.btccore.Script);
    should.exist(nodeKind.btccore.Transaction);
    should.exist(nodeKind.btccore.URI);
    should.exist(nodeKind.btccore.Unit);
  });
});
