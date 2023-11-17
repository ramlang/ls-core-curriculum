class TextAnalyzer
  def process
    text = File.open('sample_text.txt', 'r')
    yield(text.read)
    text.close
  end
end

analyzer = TextAnalyzer.new
analyzer.process { |document| puts "#{document.split("\n\n").size} paragraphs"}
analyzer.process { |document| puts "#{document.split("\n").size} lines" }
analyzer.process { |document| puts "#{document.split(" ").size} words"  }

# solution
class TextAnalyzer
  def process
    file = File.open('sample_text.txt', 'r')
    yield(file.read)
    file.close
  end
end

analyzer = TextAnalyzer.new
analyzer.process { |text| puts "#{text.split("\n\n").count} paragraphs" }
analyzer.process { |text| puts "#{text.split("\n").count} lines" }
analyzer.process { |text| puts "#{text.split(' ').count} words" }