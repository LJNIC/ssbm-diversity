import argparse
import re
import json
from pathlib import Path

parser = argparse.ArgumentParser(description='Parse SmashWiki results into json.')
parser.add_argument('file', metavar='f', type=str, nargs='+', help='the file containing the txt results')
args = parser.parse_args()

characters = ["Fox", "Falco", "Marth", "Captain Falcon", "Jigglypuff", "Sheik", "Peach", "Dr. Mario", "Luigi", "Ice Climbers", "Pikachu", "Roy", "Samus", "Mario", "Pichu", "Bowser", "Donkey Kong", "Kirby", "Mewtwo", "Zelda", "Link", "Young Link", "Mr. Game & Watch", "Yoshi", "Ganondorf", "Ness", "Zelda"]

def parse_file(filename):
    data = {}
    with open(filename, "r+") as f:
        for line in f.readlines():
            for character in characters:
                if character in line:
                    data.setdefault(character, {"character": character, "count": 0, "players": []})
                    data[character]["count"] += 1
                    separators = [index for index, value in enumerate(line) if value == '|']
                    name = line[separators[3]+1:separators[4]]
                    placing = re.findall(r'\d+', line)[0]
                    data[character]["players"].append({"name": name, "placing": placing})
    return list(data.values())

data = {}

for filename in args.file:
    data[Path(filename).stem] = parse_file(filename)

with open("data.json", "w") as f:
    f.write(json.dumps(data))

