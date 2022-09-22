import argparse
import re
import json
import glob
from pathlib import Path

parser = argparse.ArgumentParser(description="Parse SmashWiki results into json.")
parser.add_argument("dir", metavar="f", type=str, nargs=1, help="the directory containing txt results")
args = parser.parse_args()

characters = ["Fox", "Falco", "Marth", "Captain Falcon", "Jigglypuff", "Sheik", "Peach", "Dr. Mario", "Luigi", "Ice Climbers", "Pikachu", "Roy", "Samus", "Mario", "Pichu", "Bowser", "Donkey Kong", "Kirby", "Mewtwo", "Zelda", "Link", "Young Link", "Mr. Game & Watch", "Yoshi", "Ganondorf", "Ness", "Zelda"]


# { name: filename, characters: []}
def parse_file(filename):
    data = {}
    data["name"] = Path(filename).stem
    character_map = {}
    with open(filename, "r+") as f:
        for line in f.readlines():
            for character in characters:
                if (character + "|") in line:
                    character_map.setdefault(character, {"character": character, "count": 0, "players": []})
                    character_map[character]["count"] += 1
                    separators = [index for index, value in enumerate(line) if value == "|"]
                    name = line[separators[3]+1:separators[4]]
                    placing = re.findall(r"\d+", line)[0]
                    character_map[character]["players"].append({"name": name, "placing": placing})
    data["characters"] = list(character_map.values())
    return data

data = []

for filename in Path(args.dir[0]).rglob("*.txt"):
    data.append(parse_file(filename))

with open("data.json", "w") as f:
    f.write(json.dumps(data))

